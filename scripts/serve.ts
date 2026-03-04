import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const PORT = 3434;
const DIST_DIR = path.join(process.cwd(), 'dist');

const server = http.createServer((req, res) => {
  const urlPath = req.url?.split('?')[0] || '/';
  const filePath = path.join(DIST_DIR, urlPath === '/' ? 'gkd.json5' : urlPath);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const content = fs.readFileSync(filePath);
    res.writeHead(200);
    res.end(content);
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

// 获取所有局域网 IP 地址
const getAllLocalIPs = () => {
  const ips: string[] = [];
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]!) {
      if (iface.family === 'IPv4' && !iface.internal) {
        ips.push(iface.address);
      }
    }
  }
  return ips;
};

server.listen(PORT, () => {
  const ips = getAllLocalIPs();
  console.log('--------------------------------------------------');
  console.log('本地 GKD 订阅服务器已启动！');
  console.log(`电脑本地访问: http://localhost:${PORT}/gkd.json5`);
  console.log('\n手机局域网访问 (请根据你的网络环境选择):');
  ips.forEach((ip) => {
    console.log(`- http://${ip}:${PORT}/gkd.json5`);
  });
  console.log('--------------------------------------------------');
  console.log('修改 src 代码后，请运行 pnpm run build 更新订阅文件。');
});
