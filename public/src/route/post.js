// import Post from '../component/posts/post.js'

const post = {
  path: '/post/:id',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../component/posts/post.js').default)
    }, 'Post')
  }
}

module.exports = post