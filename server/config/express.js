const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const config = require('./config');
const port = config.port || 8080;

const developmentMode = 'development';
const devServerEnabled =
  process.argv.length >= 2 && process.argv[2] === developmentMode;

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevConfig = require('../../webpack.dev');

const providerRouter = require('../routes/ProviderRoute');
const categoryRouter = require('../routes/CategoryRoute');

module.exports.start = function() {
  // Connect to database
  mongoose.connect(config.db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.set('useCreateIndex', true);
  mongoose.set('useFindAndModify', false);

  const app = express();

  // Body parsing middleware
  app.use(bodyParser.json());

  // Routes
  app.use('/api/provider', providerRouter);
  app.use('/api/category', categoryRouter);

  // Register all routes before registering webpack middleware

  if (devServerEnabled) {
    webpackDevConfig.devServer.port = port;

    // reload=true:Enable auto reloading when changing JS files or content
    // timeout=1000:Time from disconnecting from server to reconnecting
    webpackDevConfig.entry.unshift(
      'webpack-hot-middleware/client?reload=true&timeout=1000',
    );

    // Add HMR plugin
    webpackDevConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

    const compiler = webpack(webpackDevConfig);
    const history = require('connect-history-api-fallback');

    app.use(history());

    // Enable "webpack-dev-middleware"
    app.use(
      webpackDevMiddleware(compiler, {
        publicPath: webpackDevConfig.output.publicPath,
      }),
    );

    // Enable "webpack-hot-middleware"
    app.use(webpackHotMiddleware(compiler));

    // Enable request logging for development debugging
    app.use(morgan('dev'));
  }

  // For hosting build files, for production
  if (!devServerEnabled) {
    const webpackBuildDir = path.join(__dirname, '../../dist');
    app.use(express.static(webpackBuildDir));

    const htmlEntrypoint = path.join(webpackBuildDir, 'index.html');

    // Handles any requests that don't match the ones above
    app.get('*', (req, res) => {
      res.sendFile(htmlEntrypoint);
    });
  }

  app.listen(port, function() {
    console.log('App listening on port: ' + port);
  });

  return app;
};
