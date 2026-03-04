import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);

// 按照 ID 进行字母序排序，让你的订阅看起来像个正经项目
apps.sort((a, b) => a.id.localeCompare(b.id));

export default defineGkdSubscription({
  id: 233,
  name: 'Subscription',
  version: 38,
  author: 'author',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/gkd-kit/subscription-template',
  categories,
  globalGroups,
  apps,
});
