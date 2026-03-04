import { defineGkdApp } from '@gkd-kit/define';

const app = defineGkdApp({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
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
          activityIds: '.activity.AppStarterActivity',
          matches: '@[text="跳过"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});

export default app;
