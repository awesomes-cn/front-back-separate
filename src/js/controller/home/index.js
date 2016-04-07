let model;
class Index extends Basic {
  constructor(){
    super()
    model = this
    this.init()
  }

  init(){
    this.register(['getMems'])
  }
 
  getMems(){
    API.get('getMems', {}, (data)=> {
      model.mvvm.$set('items',  data.items)
    }, true)
  }

}




Core.expose('home', 'index', Index)
