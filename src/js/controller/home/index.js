let mockAjax = (apiName)=> {
  return window.MOCK[apiName]
}

let API = {
  get: (apiName, params, successHandler, ismock)=> {
    if (ismock) {
      successHandler(mockAjax(apiName))
    }else{
      let url = 'http://test.dpj.com/api?apiname=' + apiName
      $.get(url, params, successHandler)
    }
  }
}






let model, mvvm
class Index {
  constructor(){
    model = this

    mvvm = new Vue({
      el: '#app',
      data: {
        items: []
      }
    })
    
    this.init()
  }

  init(){
    this.getMems()
  }

  getMems(){
    API.get('getMems', {}, (data)=> {
      mvvm.items = data.items
    },true)
  }

}

window.Controller.index = Index
