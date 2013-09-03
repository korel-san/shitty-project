module.exports.routes = {

  '/': {
    view: 'home/index'
  }, 

  '/user': {
    controller: 'main',
    action: 'user'
  },

  '/editer': {
    view: 'home/editer'
  },

  '/test': {
    controller: 'main',
    action: 'test'
  }

}