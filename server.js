'use strict';
require("babel-polyfill");

const Koa = require('koa'),
      app = new Koa(),
      views = require('koa-views'),
      router = require('koa-router')(),
      serve = require('koa-static'),
      mount = require('koa-mount'),
      url = require('url'),
      qs = require('querystring');




// 静态文件服务
app.use(mount('/dist', serve(__dirname + '/dist')));
app.use(mount('/public', serve(__dirname + '/public')));

//视图处理
app.use(views(__dirname + '/views', {
  map: {
    jade: 'jade'
  }
}));

// 路由
let renderAction = async (ctx, controller, action)=> {
  let vi = controller + '/' + action + '.jade'
  await ctx.render(vi,
    {
      params: ctx.params,
      route: {
        controller: controller,
        action: action
      },
      query: qs.parse(url.parse(ctx.request.url).query)
  })
}


router.get('/:controller/:action', async (ctx, next) =>{
  await renderAction(ctx, ctx.params.controller, ctx.params.action)
});

router.get('/:controller', async (ctx, next) =>{
  await renderAction(ctx, ctx.params.controller, 'index')
});

router.get('/', async (ctx, next) =>{
  await renderAction(ctx, 'home', 'index')
});



app
  .use(router.routes())
  .use(router.allowedMethods());



app.listen(3000);
