// import Posts from './posts.js'
// import Post from './post.js'
// import Write from './write.js'
// import SignInput from './signInput.js'
// import About from './about.js'
// import Talk from './talk.js'

const rootRoute = {
  path: '/',
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require("./posts.js").default)
      }, 'Posts')
    },
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require("../component/nav.js").default)
    }, 'Nav')
  },
  childRoutes: [
    require("./posts.js"),
    require("./post.js"),
    require("./write.js"),
    require("./signInput.js"),
    require("./about.js"),
    require("./talk.js")
  ]
}

export default rootRoute