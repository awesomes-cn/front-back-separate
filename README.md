## front-back-separate
A try to separate front from end!!

## How
Our front develop need run a node server to offer route and view,all data get from API through ajax.

http request ——> node server(route & view) ——> Data API Ajax(PHP)


## start

1. install all dependence:
```bash
npm install
```

2、install `pm2`
```bash
npm install pm2 -g
```

3、start server
```bash
pm2 start app.js --watch
```
4、watch css and js change and auto recompile:
```bash
npm run watch
```

Now you can develop your app now..

note: the front build system is from https://github.com/awesomes-cn/workboot
