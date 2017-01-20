// import Write from '../component/posts/write.js'

const update = {
  path: '/updatePost/:id',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../component/posts/write.js').default)
    }, 'Update')
  }
}

module.exports = update