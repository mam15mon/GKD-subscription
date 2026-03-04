import { defineGkdApp } from '@gkd-kit/define';

const app = defineGkdApp({
  id: 'com.sina.weibo',
  name: '微博',
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
          activityIds: '.SplashActivity',
          // 整个父链均 clickable=false，GKD 触摸模拟不依赖 clickable 属性
          // 直接在 TextView 坐标上执行触摸即可
          matches: '@[text="跳过"][visibleToUser=true]',
        },
      ],
    },
  ],
});

export default app;
