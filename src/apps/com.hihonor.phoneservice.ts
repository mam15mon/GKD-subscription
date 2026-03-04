import { defineGkdApp } from '@gkd-kit/define';

const app = defineGkdApp({
  id: 'com.hihonor.phoneservice',
  name: '我的荣耀',
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
          activityIds: '.OpenScreenAdActivity',
          matches:
            '@[id="com.hihonor.phoneservice:id/start_skip_count_down"][clickable=true]',
        },
      ],
    },
  ],
});

export default app;
