'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.controllerRegister.controllerRegister);
  router.get('/commit', controller.controllerRegister.test);
  router.get('/login', controller.controllerLogin.judgeLogin);
};
