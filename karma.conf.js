module.exports = function karmaConfig(config) {
    config.set({
      frameworks: [
        'jasmine'
      ],
  
      reporters: [
        'mocha'
      ],
  
      mochaReporter: {
        showDiff: true,
        ignoreSkipped: true
      },
  
      files: [
        'node_modules/babel-polyfill/dist/polyfill.js',
        // Grab all files in the app folder that contain .spec.
        './app/tests.webpack.js'
      ],
  
      preprocessors: {
        './app/tests.webpack.js': ['webpack', 'sourcemap']
      },
  
      browsers: [
        'PhantomJS'
      ],
  
      singleRun: true,
  
      logLevel: config.LOG_DEBUG,
      client: {
        captureConsole: true,
        mocha: {
          bail: true
        }
      },
  
      webpack: require('./webpack.config'),
  
      // Hide webpack build information from output
      webpackMiddleware: {
        noInfo: 'errors-only'
      }
    });
  };
  