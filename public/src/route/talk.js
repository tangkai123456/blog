// import Talk from '../component/talk/talk.js'

const talk = {
  path: '/talk',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../component/talk/talk.js').default)
    }, 'Talk')
  }
}

module.exports = talk