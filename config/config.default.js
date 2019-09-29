
'use strict';

// eslint-disable-next-line no-unused-vars
module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + ' ';
  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'test',
    },
  };
  config.view = {
    defaultViewEngine: '.ejs',

    mapping: {
      '.html': 'ejs',
    },
  };

  return {
    ...config,
  };

};
