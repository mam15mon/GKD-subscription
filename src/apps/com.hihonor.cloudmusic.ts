import { defineGkdApp } from '@gkd-kit/define';

const app = defineGkdApp({
  id: 'com.hihonor.cloudmusic',
  name: '音乐',
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
          activityIds: 'com.netease.cloudmusic.activity.MainActivity',
          matches: '@[id="com.hihonor.cloudmusic:id/skipBtn"][clickable=true]',
        },
      ],
    },
  ],
});

export default app;
