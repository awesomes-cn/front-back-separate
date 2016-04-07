'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var model = void 0;

/**
 * 基础类，包含一些公用的方法和属性
 */

var Basic = function () {
  function Basic() {
    _classCallCheck(this, Basic);

    model = this;

    /**
     * vue 实例化 子类中也会用到
     * 子类通过 this.mvvm.$set() 添加vue data 数据
     * 子类通过 this.register([]) 注册 vue methods
     */
    this.mvvm = new Vue({
      el: '#app'
    });
    //window.MVVM = this.mvvm
    this.initBasic();
  }

  /**
   * 基础类里面的初始化方法 可以通过在子类中重写来覆盖，实现定制
   * @return {void} 
   */


  _createClass(Basic, [{
    key: 'initBasic',
    value: function initBasic() {
      this.islogin();
      this.register(['login', 'logout']);
    }

    /**
     * 注册某些方法到 vue 上
     * @param  {string} method 方法名
     * @return {void}        
     */

  }, {
    key: 'register',
    value: function register(methods) {
      var _this = this;

      methods.forEach(function (item) {
        _this.mvvm[item] = _this[item];
      });
    }

    // 获取登录状态

  }, {
    key: 'islogin',
    value: function islogin() {
      API.get('getLoginState', {}, function (data) {
        model.mvvm.$set('islogin', data.islogin);
      });
    }

    //登录

  }, {
    key: 'login',
    value: function login() {
      API.post('login', {}, function (data) {
        model.mvvm.$set('islogin', data.islogin);
      });
    }

    // 注销

  }, {
    key: 'logout',
    value: function logout() {
      API.post('logout', {}, function (data) {
        model.mvvm.$set('islogin', data.islogin);
      });
    }
  }]);

  return Basic;
}();