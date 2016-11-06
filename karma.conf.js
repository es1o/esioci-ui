// https://github.com/Nikku/karma-browserify
module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['browserify', 'jasmine'],
    files: [
      'test/unit/**/*.js',
      'node_modules/vue/dist/vue.js',
      'node_modules/vue-resource/dist/vue-resource.js',
      'app.js'
    ],
    reporters: ['spec', 'coverage'],
    preprocessors: {
      'test/unit/**/*.js': ['browserify', 'coverage']
    },
    vue: {
      loaders: {
        js: 'isparta'
      }
    },
    browserify: {
      debug: true,
      // needed to enable mocks
      plugin: [require('proxyquireify').plugin]
    },
    extensions: ['.vue', '.js'],
    // transform: [
    //     ['vueify'],
    //     istanbul({
    //         instrumenterConfig: { embedSource: true },
    //         instrumenter: isparta,
    //         ignore: [
    //             '**/node_modules/**',
    //             '**/test/**'
    //         ]
    //     }),
    //     ['babelify']
    // ]
    // if you want to continuously re-run tests on file-save,
    // replace the following line with `autoWatch: true`
    singleRun: true
  })
}
