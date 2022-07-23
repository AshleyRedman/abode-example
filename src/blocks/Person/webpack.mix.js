let mix = require('laravel-mix');
let config = require('../../webpack.mix');

mix.webpackConfig(config);

mix.options({
  terser: {
    extractComments: false,
  },
  manifest: false,
});

mix.js('./builder.ts', './dist/bundle.js').react();
