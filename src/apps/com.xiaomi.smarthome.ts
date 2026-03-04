import { defineGkdApp } from '@gkd-kit/define';

const app = defineGkdApp({
  id: 'com.xiaomi.smarthome',
  name: '米家',
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
          activityIds: '.SmartHomeMainActivity',
          matches:
            '@[id="com.xiaomi.smarthome:id/ads_timer_view"][clickable=true]',
        },
      ],
    },
  ],
});

export default app;
