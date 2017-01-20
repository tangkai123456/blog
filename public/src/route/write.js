// import Write from '../component/posts/write.js'

const write = {
  path: '/write',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../component/posts/write.js').default)
    }, 'Write')
  }
}

module.exports = write