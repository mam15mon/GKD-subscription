import { defineGkdApp } from '@gkd-kit/define';

const app = defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
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
          activityIds: '.MainFrameActivity',
          matches: '@[text="跳过"][visibleToUser=true]',
        },
      ],
    },
  ],
});

export default app;
