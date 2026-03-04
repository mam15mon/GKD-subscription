import fs from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';

const subscriptionPath = path.join(process.cwd(), 'src/subscription.ts');

// 获取当前版本
const getCurrentVersion = () => {
  const content = fs.readFileSync(subscriptionPath, 'utf8');
  const match = content.match(/version:\s*(\d+)/);
  return match ? parseInt(match[1]) : null;
};

// 检查 src 目录是否有未提交的改动（排除 subscription.ts 版本号的变动）
const hasChanges = () => {
  try {
    const untracked = execSync(
      'git ls-files --others --exclude-standard src/',
      { encoding: 'utf8' },
    ).trim();

    // 获取 src/ 下所有有改动的文件
    const changedFiles = execSync('git diff --name-only HEAD src/', {
      encoding: 'utf8',
    })
      .trim()
      .split('\n')
      .filter(Boolean);

    // 检查 subscription.ts 的改动是否只是版本号变了
    const subscriptionIndex = changedFiles.findIndex((f) =>
      f.endsWith('subscription.ts'),
    );
    if (subscriptionIndex !== -1) {
      const diff = execSync('git diff HEAD src/subscription.ts', {
        encoding: 'utf8',
      });
      // 如果 diff 中只有包含 "version" 的行有变化，认为不是实质性改动
      const lines = diff.split('\n');
      const hasRealChanges = lines.some((line) => {
        // 忽略 diff 的元数据行（+++ / --- / @@）
        if (line.match(/^(\+\+\+|---|@@)/)) return false;
        // 如果有改动且不是只改版本号行
        if (line.startsWith('+') || line.startsWith('-')) {
          // 版本号行的模式：+ version: 123 或 - version: 123
          if (line.match(/^\s*[+-]\s*version:\s*\d+/)) return false;
          return true;
        }
        return false;
      });

      if (!hasRealChanges) {
        // subscription.ts 只有版本号变了，移除它
        changedFiles.splice(subscriptionIndex, 1);
      }
    }

    return changedFiles.length > 0 || untracked.length > 0;
  } catch {
    // 如果不是 git 仓库或者没装 git，就默认认为有改动（保险起见）
    return true;
  }
};

const isForce = process.argv.includes('--force');
const currentVersion = getCurrentVersion();

if (currentVersion === null) {
  console.error('错误: 无法在 src/subscription.ts 中找到 version');
  process.exit(1);
}

if (hasChanges() || isForce) {
  const newVersion = currentVersion + 1;
  const content = fs.readFileSync(subscriptionPath, 'utf8');
  const newContent = content.replace(
    /version:\s*\d+/,
    `version: ${newVersion}`,
  );
  fs.writeFileSync(subscriptionPath, newContent);
  console.log('--------------------------------------------------');
  console.log(
    `检测到 src 变动，版本号已递增: ${currentVersion} -> ${newVersion}`,
  );

  console.log('正在执行构建...');
  try {
    execSync('pnpm run build', { stdio: 'inherit' });
  } catch {
    console.error('构建失败！');
    process.exit(1);
  }
} else {
  console.log('--------------------------------------------------');
  console.log(`src 无变动，保持当前版本: ${currentVersion}`);
  console.log('(提示: 使用 pnpm run dev --force 可强制递增版本)');
}

console.log('正在启动本地服务器...');
// 启动服务
execSync('tsx ./scripts/serve.ts', { stdio: 'inherit' });
