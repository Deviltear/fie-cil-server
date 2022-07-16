'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    ctx.body = 'hi, egg,I am sunnycc';
  }
}

module.exports = HomeController;
