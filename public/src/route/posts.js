// import Posts from '../component/posts/posts.js'

const posts = {
  path: '/main',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../component/posts/posts.js').default)
    }, 'Posts')
  }
}

module.exports = posts