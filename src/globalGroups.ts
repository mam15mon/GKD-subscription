import { defineGkdGlobalGroups } from '@gkd-kit/define';

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告',
    desc: '点击跳过应用启动时的开屏广告',
    order: -10,
    matchRoot: true,
    actionMaximum: 2,
    matchTime: 9000,
    fastQuery: true,
    resetMatch: 'app',
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        // 排除搜索框、设置等UI的关闭按钮
        excludeMatches: [
          '([text*="搜索" || text="历史记录" || text$="在搜"][text.length>3 && text.length<7][visibleToUser=true]) || ([text="设置" || text="退款详情" || text="Submit" || text*="阅读并同意" || text$="登录"][visibleToUser=true])',
          '[id~="(?is).*search.*"] < * > [(id~="(?is).*clear.*")||(id~="(?is).*close.*")||(id~="(?is).*back.*")||(text~="(?is).*取消.*")][height>0&&width>0][top>0&&left>0]',
          '[name!$=".EditText"] < * > [(id~="(?is).*clear.*")||(id~="(?is).*close.*")||(id~="(?is).*back.*")||(text~="(?is).*取消.*")][height>0&&width>0][top>0&&left>0]',
        ],
        matches:
          '[name!$=".CheckBox"][name!$=".EditText"][name!$=".ProgressBar"][childCount=0][visibleToUser=true][height>0&&width>0&&width<500&&height<300][top>0&&left>0][(text.length<=6&&(text~="(?is)跳[\\\\s]*过[\\\\s]*[(\\\\(]?\\\\d{0,2}[)\\\\)]?.*"||text~="(?is)跳[\\\\s]*過[\\\\s]*[(\\\\(]?\\\\d{0,2}[)\\\\)]?.*"||text~="(?is).*skip.*"))||id~="(?is).*tt_splash_skip_btn"||vid~="(?is).*skip.*"||(vid~="(?is).*count.*"&&vid~="(?is).*down.*"&&!(vid~="(?is).*load.*")&&!(vid~="(?is).*hour.*")&&!(vid~="(?is).*minute.*")&&!(vid~="(?is).*timing.*")&&!(vid~="(?is).*add.*")&&!(vid~="(?is).*ead.*"))||desc~="(?is)跳[\\\\s]*过[\\\\s]*[(\\\\(]?\\\\d{0,2}[)\\\\)]?.*"||desc~="(?is)跳[\\\\s]*過[\\\\s]*[(\\\\(]?\\\\d{0,2}[)\\\\)]?.*"||desc~="(?is).*skip.*"][!(text~="([01]?[0-9]|2[0-3])[:：][0-5][0-9]")][!(desc~="([01]?[0-9]|2[0-3])[:：][0-5][0-9]")]',
        snapshotUrls: ['https://i.gkd.li/import/13178517'],
      },
      {
        key: 1,
        // 针对"广告"标识的特殊处理
        matches:
          '[text="广告"] <<n ViewGroup >n ViewGroup[childCount=1][clickable=true] > ImageView[name!$=".CheckBox"][name!$=".EditText"][name!$=".ProgressBar"][childCount=0][visibleToUser=true][height>0&&width>0&&width<500&&height<300][top>0&&left>0]',
        snapshotUrls: ['https://i.gkd.li/import/13347663'],
      },
      {
        key: 2,
        matches:
          '[text="广告"] <<n ViewGroup >n ViewGroup[childCount=4][clickable=true] > [text="跳过"][name!$=".CheckBox"][name!$=".EditText"][name!$=".ProgressBar"][childCount=0][visibleToUser=true][height>0&&width>0&&width<500&&height<300][top>0&&left>0]',
        snapshotUrls: ['https://i.gkd.li/import/13423306'],
      },
      {
        key: 3,
        matches:
          '[text="广告"]  <<n ViewGroup +2 ViewGroup[childCount=3][checked=false] >n ImageView[name!$=".CheckBox"][name!$=".EditText"][name!$=".ProgressBar"][childCount=0][visibleToUser=true][height>0&&width>0&&width<500&&height<300][top>0&&left>0]',
        snapshotUrls: ['https://i.gkd.li/import/13619467'],
      },
    ],
  },
]);
