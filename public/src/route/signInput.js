// import SignInput from '../component/sign/signInput.js'

const signInput = {
  path: '/sign/:type',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../component/sign/signInput.js').default)
    }, 'SignInput')
  }
}

module.exports = signInput