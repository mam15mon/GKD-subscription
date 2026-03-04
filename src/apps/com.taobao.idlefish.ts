import { defineGkdApp } from '@gkd-kit/define';

const app = defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
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
          activityIds: '.maincontainer.activity.MainActivity',
          matches:
            '@[id="com.taobao.idlefish:id/splash_ad_close"][clickable=true]',
        },
      ],
    },
  ],
});

export default app;
