window.API = {
  
  /**
   * 发送Get请求获取数据
   * @param  {string} apiName        API名
   * @param  {object} params         参数
   * @param  {function} successHandler 请求成功回调
   * @param  {boolen} ismock 是否走本地的mock数据
   * @return {void}                
   */
  get: (apiName, params, successHandler, ismock)=> {
    if (ismock) {
      successHandler(window.MOCK[apiName])
    }else{
      let url = 'http://test.dpj.com/api?apiname=' + apiName
      $.get(url, params, successHandler)
    }
  }
}
