/**
 * Created by meathill on 14/11/13.
 */
'use strict';
(function (ns) {
  ns.API = 'http://sys.reverflow.com/diy/';
  ns.UPLOAD = 'http://sys.reverflow.com/diy/'; // 上传文件的起始路径
  ns.VERSION = '${version}';
  ns.path = ''; // 项目路径
  ns.config = {
    login: {
      welcome: '欢迎使用久韵广告自助平台',
      admin: 'service@dianjoy.com',
      verify: ns.API + 'showimg.php',
      className: 'login'
    },
    oauth: {
      kepler: {
        name: 'kepler',
        backURL: 'http://kepler.dianjoy.cn/enter_url.php',
        welcome: '将授权给 Kelper 使用'
      }
    }
  };

  // 项目名称，主要用于生成key
  ns.PROJECT = 'ad-diy';

  // 通知的key
  ns.NOTICE_KEY = 'tiger-prawn';

  // 起始页面，登录后自动跳转的页面
  ns.startPage = '';

  // 启动路径，这个bug终于修了么……
  ns.BASE = '/tiger-prawn';

  // 命名空间
  ns.NAME_SPACE = 'tp';
}(Nervenet.createNameSpace('tp')));
