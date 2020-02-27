const webpack = require('webpack')

const prod = process.env.NODE_ENV === 'production'
const assetPrefix = prod ? '/access-recruit' : ''

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' }
    };
  },
  assetPrefix: assetPrefix,
  publicRuntimeConfig:{
    production: prod,
    prefix: assetPrefix
  }
};