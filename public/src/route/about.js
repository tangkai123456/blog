// import About from '../component/about/about.js'

const about = {
  path: '/about',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../component/about/about.js').default)
    }, 'About')
  }
}

module.exports = about