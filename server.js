'use strict';
require("babel-polyfill");
const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const router = require('koa-router')();
const serve = require('koa-static');
const  mount = require('koa-mount')

// 静态文件服务
app.use(mount('/dist', serve(__dirname + '/dist')));


app.use(views(__dirname + '/views', {
  map: {
    jade: 'jade'
  }
}));

router.get('/:controller/:action', async (ctx, next) =>{
  let vi = ctx.params.controller + '/' + ctx.params.action + '.jade'
  await ctx.render(vi,{params: ctx.params})
});

router.get('/:controller', async (ctx, next) =>{
  let vi = ctx.params.controller + '/index.jade'
  await ctx.render(vi,{params: ctx.params})
});

app
  .use(router.routes())
  .use(router.allowedMethods());



app.listen(3000);
