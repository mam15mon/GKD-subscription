import { defineGkdApp } from '@gkd-kit/define';

const app = defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '功能类-电脑微信快捷自动登录',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          versionCode: { minimum: 3000 },
          activityIds: [
            '.plugin.webwx.ui.ExtDeviceWXLoginUI',
            '.ui.LauncherUI',
            '.plugin.webview.ui.tools.MMWebViewUI',
          ],
          matches: [
            '[text="登录 Windows 微信" || text^="Log in to Weixin for"][visibleToUser=true]',
            '[text="登录" || text="Log In"][visibleToUser=true]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '功能类-自动领取微信红包',
      enable: false,
      desc: '自动领取私聊红包,群聊红包',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '点击别人发的红包',
          activityIds: [
            '.ui.LauncherUI',
            '.ui.chatting.variants.ChattingMainUI',
          ],
          matches:
            'LinearLayout[childCount=1] >2 @FrameLayout[clickable=true] >2 LinearLayout[getChild(1).childCount=1] +2 RelativeLayout > [text="微信红包"]',
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击红包-开',
          matchRoot: true,
          activityIds: '.plugin.luckymoney.ui.LuckyMoney',
          matches: '@Button[desc="开"] -3 LinearLayout >2 [text$="红包"]',
        },
        {
          preKeys: [0, 1],
          name: '从红包结算界面返回',
          activityIds: '.plugin.luckymoney.ui.LuckyMoney',
          matches: '@ImageView[desc="返回"] +n LinearLayout >8 [text$="红包"]',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-发送图片自动勾选原图',
      enable: false,
      desc: '发送图片时自动勾选"原图"',
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          name: '发送原图',
          activityIds: '.plugin.gallery.ui.AlbumPreviewUI',
          matches: '[id="com.tencent.mm:id/ngr"][desc*="原图"][checked=false]',
        },
      ],
    },
  ],
});

export default app;
