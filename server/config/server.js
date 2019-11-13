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
const webpackDevConfig = require('../../webpack.dev.js');

const providerRouter = require('../routes/provider.route.js');

module.exports.start = function() {
  // connect to database
  mongoose.connect(config.db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.set('useCreateIndex', true);
  mongoose.set('useFindAndModify', false);

  const app = express();

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

    // Enable "webpack-dev-middleware"
    app.use(
      webpackDevMiddleware(compiler, {
        publicPath: webpackDevConfig.output.publicPath,
      }),
    );

    // Enable "webpack-hot-middleware"
    app.use(webpackHotMiddleware(compiler));
  }

  // enable request logging for development debugging
  app.use(morgan('dev'));

  // body parsing middleware
  app.use(bodyParser.json());

  app.get('/api', (req, res) => {
    res.send('Hello World!');
  });

  app.use('/api/provider', providerRouter);

  const webpackBuildDir = path.join(__dirname, '../../dist');
  app.use(express.static(webpackBuildDir));

  const htmlEntrypoint = path.join(webpackBuildDir, 'index.html');
  app.get('/', (req, res) => {
    res.sendFile(htmlEntrypoint);
  });
  app.all('/*', (req, res) => {
    res.sendFile(htmlEntrypoint);
  });

  app.listen(port, function() {
    console.log('App listening on port: ' + port);
  });

  return app;
};
