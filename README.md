# riot-plain-loader
[![NPM Version][npm-image]][npm-url]

A loader for WebPack which minifies HTML right inside of plain-JS [Riot](http://riotjs.com) tags.

This is just a wrapper around [riot-plain-htmlmin](https://github.com/ilearnio/riot-plain-htmlmin) package.

## Usage

```js
// webpack.config.js
module.exports = {
  ...
  module: {
    preLoaders: [
      {
        test: /\.riot$/,
        exclude: /node_modules/,
        loader: 'riot-plain',
        query: {
          compact: true
        }
      }
    ]
  }
}
```

[npm-image]: https://img.shields.io/npm/v/riot-plain-loader.svg
[npm-url]: https://npmjs.org/package/riot-plain-loader
