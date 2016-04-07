let model

/**
 * 基础类，包含一些公用的方法和属性
 */
class Basic {
  constructor(){
    model = this

    /**
     * vue 实例化 子类中也会用到
     * 子类通过 this.mvvm.$set() 添加vue data 数据
     * 子类通过 this.register([]) 注册 vue methods
     */
    this.mvvm = new Vue({
      el: '#app'
    })
    //window.MVVM = this.mvvm
    this.initBasic()
  }
  
  /**
   * 基础类里面的初始化方法 可以通过在子类中重写来覆盖，实现定制
   * @return {void} 
   */
  initBasic(){
    this.islogin()
    this.register(['login', 'logout'])
  }
  
  /**
   * 注册某些方法到 vue 上
   * @param  {string} method 方法名
   * @return {void}        
   */
  register(methods){
    methods.forEach((item)=> {
      this.mvvm[item] = this[item]
    })
  }

  
  // 获取登录状态
  islogin(){
    API.get('getLoginState', {}, (data)=> {
      model.mvvm.$set('islogin', data.islogin)
    })
  }
  
  //登录
  login(){
    API.post('login', {}, (data)=> {
      model.mvvm.$set('islogin', data.islogin)
    })
  }

  // 注销
  logout(){
    API.post('logout', {}, (data)=> {
      model.mvvm.$set('islogin', data.islogin)
    })
  }

}





