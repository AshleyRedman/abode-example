// @see https://laravel-mix.com/extensions

const mix = require('laravel-mix');
require('laravel-mix-bundle-analyzer');

mix.bundleAnalyzer({
  analyzerMode: 'static',
});

if (mix.isWatching()) {
  mix.bundleAnalyzer();
}

// webpack extention options, we dont lose anything but using this as an absract ontop of wb
mix.webpackConfig({
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
});

// general mix specifc options
mix.options({
  terser: {
    extractComments: false,
  },
  manifest: false,
  clearConsole: false,
});

mix.js('./blocks/Text/builder.ts', './dist/Text.js').react(); // new bundle for each comp
mix.js('./blocks/Person/builder.ts', './dist/Person.js').react(); // new bundler for each comp
mix.js('./blocks/Thing/builder.ts', './dist/Thing.js').react(); // new bundler for each comp

// pull out vendors
//
// this will spit out manifest & vendors js files, manifest must be loaded before vendors
//
// not the worlds best solution, but alway load these two on every page
//
// this would be any react 'js' files loaded after the fact always have their vendors / deps available, meaning the vendors
// file which is loaded on every page is the big one, but is only 'big' based on deps added, not to do with our component count
mix.extract();
