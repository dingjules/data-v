const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack           = require('webpack');
const path              = require('path');
const configuration     = require('./webpack.config');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

Object.assign(configuration.plugins[0].options.templateVariables, {
  debug: true
});

configuration.entry = [
    'webpack-dev-server/client?http://0.0.0.0:3000'
  ].concat(configuration.entry);

configuration.output = {
  filename: '[name].bundle.js',
  publicPath: '/',
  path: path.resolve(__dirname, '.')
};

configuration.plugins = configuration.plugins.concat([
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
            if (module.resource && (/^.*\.(css)$/).test(module.resource)) {
                return false;
            }
            return module.context && module.context.indexOf("node_modules") !== -1;
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
    }),
    new webpack.NamedChunksPlugin((chunk) => {
        if (chunk.name) {
            return chunk.name;
        }
        return chunk.modules.map(m => path.relative(m.context, m.request)).join("_");
    }),
    new webpack.NamedModulesPlugin(),
    new BrowserSyncPlugin(
    // BrowserSync options
    {
      // browse to http://localhost:3000/ during development
      host: 'localhost',
      port: 3000,
      // proxy the Webpack Dev Server endpoint
      // (which should be serving on http://localhost:3100/)
      // through BrowserSync
      proxy: {
        ws: true,
        target: 'http://localhost:3100/'
      }
    },
    {
      reload: false
    }
  ),
  new webpack.HotModuleReplacementPlugin()
]);

module.exports = configuration;
