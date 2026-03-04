import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'bubei.tingshu',
  name: '懒人听书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          activityIds: '.listen.guide.ui.activity.LOGOActivity',
          matches: '[text="跳过"]',
        },
      ],
    },
  ],
});
