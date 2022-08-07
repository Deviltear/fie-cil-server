'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/template', controller.template.getTemplate);

    // app.io.of('/')
    app.io.route('chat', app.io.controller.chat.index);

    // app.io.of('/chat')
    app.io.of('/chat').route('chat', app.io.controller.chat.index);
};
