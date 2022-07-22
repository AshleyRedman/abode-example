let mix = require('laravel-mix');
let config = require('../../webpack.mix');

mix.webpackConfig(config);

// extend the main config
mix.options({
  terser: {
    extractComments: false,
  },
  manifest: false
});

// The actual bundling, nice & easy
mix.js('./builder.ts', './dist/bundle.js').react();
