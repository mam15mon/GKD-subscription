import { defineGkdApp } from '@gkd-kit/define';

const app = defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
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
          activityIds: '.activity.MainActivity',
          matches: '@[id="com.netease.cloudmusic:id/skipBtn"][clickable=true]',
        },
      ],
    },
  ],
});

export default app;
