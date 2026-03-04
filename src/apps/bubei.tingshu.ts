import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'bubei.tingshu',
  name: '懒人听书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      enable: false,
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
    {
      key: 1,
      name: '局部广告-悬浮广告',
      enable: false,
      rules: [
        {
          key: 0,
          name: '播放列表-右侧悬浮广告',
          fastQuery: true,
          activityIds: 'bubei.tingshu.listen.book.detail.activity.DetailActivity',
          matches: '[id="bubei.tingshu:id/closeIcon"][desc="关闭"]',
        },
      ],
    },
  ],
});
