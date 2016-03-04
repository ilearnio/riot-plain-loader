'use strict'

const loaderUtils = require('loader-utils')
const minify = require('riot-plain-htmlmin')

function loader (str) {
  const options = arguments[1] || loaderUtils.parseQuery(this.query)

  return minify(str, options)
}

module.exports = loader
