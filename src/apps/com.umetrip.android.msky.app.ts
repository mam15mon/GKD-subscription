import { defineGkdApp } from '@gkd-kit/define';

const app = defineGkdApp({
  id: 'com.umetrip.android.msky.app',
  name: '航旅纵横',
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
          activityIds: 'com.umetrip.advert.activity.AdActivity',
          matches:
            '@[id="com.umetrip.android.msky.app:id/advert_tv_jump"][clickable=true]',
        },
      ],
    },
  ],
});

export default app;
