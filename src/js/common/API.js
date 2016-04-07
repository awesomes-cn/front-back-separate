let baseurl = 'http://192.168.26.128:4000' 

window.API = {
  

  ajax: (url, method, data, successHandler)=> {
    $.ajax({
      type: method,
      url: url,
      data: data,
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      success: successHandler   
    })
    
  },
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
      let url = baseurl + '?apiname=' + apiName
      API.ajax(url, 'get', params, successHandler)
    }
  },

  post: (apiName, params, successHandler, ismock)=> {
    if (ismock) {
      successHandler(window.MOCK[apiName])
    }else{
      let url = baseurl
      API.ajax(url, 'post', {apiname: apiName}, successHandler)
    }
  }

}
