// https://github.com/michael-ciniawsky/postcss-load-config
var tailwindcss = require('tailwindcss');

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "tailwindcss": './tailwind-config.js',
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
