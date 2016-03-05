# riot-plain-loader
[![NPM Version][npm-image]][npm-url]

A loader for WebPack for plain-JS [Riot](http://riotjs.com) tags.

It does two things:
 1. Minifies HTML right inside of plain-JS tags
 2. Fixes all of the HTML [limitations](http://riotjs.com/api/#example) when working with `riot.tag()`, since your HTML starts to act like if it's a `.tag` file.


This package is just a wrapper around [riot-plain-htmlmin](https://github.com/ilearnio/riot-plain-htmlmin) package. Check it out for more information.

## Usage

```js
// webpack.config.js
module.exports = {
  ...
  module: {
    preLoaders: [
      {
        test: /\.riot$/, // put your custom Riot extension here
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
