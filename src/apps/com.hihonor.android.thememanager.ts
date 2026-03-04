import { defineGkdApp } from '@gkd-kit/define';

const app = defineGkdApp({
  id: 'com.hihonor.android.thememanager',
  name: '主题',
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
          activityIds: '.PageActivity',
          matches:
            '@[id="com.hihonor.android.thememanager:id/acPageNext"][clickable=true]',
        },
      ],
    },
    {
      key: 1,
      name: '广告-关闭主页推广弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.HwThemeManagerActivity',
          matches:
            '@[id="com.hihonor.android.thememanager:id/mtDialogClose"][clickable=true]',
        },
      ],
    },
  ],
});

export default app;
