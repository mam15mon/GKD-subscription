import { defineGkdApp } from '@gkd-kit/define';

const app = defineGkdApp({
  id: 'com.luna.music',
  name: '汽水音乐',
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
          activityIds: 'com.luna.biz.ad.view.container.AdActivity',
          matches: '@[id="com.luna.music:id/if2"][clickable=true]',
        },
      ],
    },
  ],
});

export default app;
