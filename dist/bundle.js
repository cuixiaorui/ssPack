(modules => {
  const require = id => {
    const { factory, map } = modules[id]
    const localRequire = name => require(map[name])
    const module = { exports: {} }

    factory(module, localRequire)

    return module.exports
  }

  require(0)
})({
  0: {
    factory: (module, require) => {
      const file = require("./demo.js");
      console.log(file());

    },
    map: { "./demo.js": 1 }
  }, 1: {
    factory: (module, require) => {

      module.exports = function () {
        return 5;
      }

    },
    map: {}
  }
})