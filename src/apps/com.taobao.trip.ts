import { defineGkdApp } from '@gkd-kit/define';

const app = defineGkdApp({
  id: 'com.taobao.trip',
  name: '飞猪旅行',
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
          activityIds: '.splash.ui.ImageSplashActivity',
          matches:
            '@[id="com.taobao.trip:id/splash_biz_skip_ad"][clickable=true]',
        },
      ],
    },
  ],
});

export default app;
