module.exports = {
  components: './src/node_modules/components/**/[A-Z]*.js',
  defaultExample: true,
  webpackConfig: require('./config/webpack.config.dev.js'),
  template: 'styleguide/index.html'
};
