import { defineGkdApp } from '@gkd-kit/define';

const app = defineGkdApp({
  id: 'com.android.packageinstaller',
  name: '软件包安装程序',
  groups: [
    {
      key: 0,
      name: '功能类-自动确认安装',
      desc: '依次点击「知道了」→ 勾选风险确认 → 点击「继续安装」',
      fastQuery: true,
      matchTime: 30000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '点击知道了',
          activityIds: '.PackageInstallerActivity',
          matches: '@[id="android:id/button1"][text="知道了"][clickable=true]',
        },
        {
          key: 1,
          name: '勾选风险确认复选框',
          preKeys: [0],
          activityIds: '.PackageInstallerActivity',
          matches:
            '@[id="com.android.packageinstaller:id/checkbox"][checked=false][clickable=true]',
        },
        {
          key: 2,
          name: '点击继续安装',
          preKeys: [1],
          activityIds: '.PackageInstallerActivity',
          matches:
            '@[id="android:id/button1"][text="继续安装"][clickable=true]',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-拒绝进入安全模式',
      desc: '安装完成后自动点击「放弃」，拒绝荣耀安全模式提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.InstallSuccess',
          matches: '@[id="android:id/button2"][text="放弃"][clickable=true]',
        },
      ],
    },
  ],
});

export default app;
