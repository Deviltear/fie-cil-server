'use strict';
const {mongo} = require('../utils/mongo');

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    const data =await mongo().query('project')
    ctx.body = data;
  }
}

module.exports = HomeController;
