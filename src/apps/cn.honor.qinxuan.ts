import { defineGkdApp } from '@gkd-kit/define';

const app = defineGkdApp({
  id: 'cn.honor.qinxuan',
  name: '荣耀亲选',
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
          activityIds: '.splash.SplashActivity',
          matches: '@[id="cn.honor.qinxuan:id/tv_time"][clickable=true]',
        },
      ],
    },
  ],
});

export default app;
