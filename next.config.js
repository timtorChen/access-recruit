const webpack = require('webpack')

const prod = process.env.NODE_ENV === 'production'
const repoName = 'access-recruit'
const assetPrefix = prod ? `/${repoName}` : ''

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
  assetPrefix: assetPrefix,
  publicRuntimeConfig:{
    production: prod,
    prefix: assetPrefix
  }
};