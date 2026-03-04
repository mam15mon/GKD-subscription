import { defineGkdApp } from '@gkd-kit/define';

const app = defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 0,
      name: '广告-跳过开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivityV2',
          matches: '@[id="tv.danmaku.bili:id/count_down"][clickable=true]',
        },
      ],
    },
  ],
});

export default app;
