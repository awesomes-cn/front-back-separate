"use strict";
const fse = require('fs-extra'),
      path = require('path'),
      Helper = require('./helper'),
      PC = require("../project.config")

let build = ()=> { 
  let data = Helper.walk('./dist/js/mock').reduce((last, item)=> {
    last[path.basename(item, '.js')] = require('.' + item)
    return last
  },{})
  let ws = fse.createOutputStream(path.dirname(__dirname) + '/dist/js/development.js')
  ws.write('window.MOCK=' + JSON.stringify(data))
}

build()
