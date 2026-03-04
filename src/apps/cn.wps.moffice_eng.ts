import { defineGkdApp } from '@gkd-kit/define';

const app = defineGkdApp({
  id: 'cn.wps.moffice_eng',
  name: 'WPS Office',
  groups: [
    {
      key: 0,
      name: '广告-关闭登录后推广弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'cn.wps.moffice.main.AfterLoginActivity',
          matches:
            '@[id="cn.wps.moffice_eng:id/afterlogin_cancel"][clickable=true]',
        },
      ],
    },
    {
      key: 1,
      name: '广告-关闭首页推广弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'cn.wps.moffice.main.local.HomeRootActivity',
          matches:
            '@[id="cn.wps.moffice_eng:id/remind_close_button"][clickable=true]',
        },
      ],
    },
  ],
});

export default app;
