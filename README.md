# collapse-line-breaks-loader

## Config

```js
module.exports = {
  module: {
    loaders: [
      { test: /\.hbs$/, loader: 'handlebars!collapse-line-breaks!trim-lines' }
    ]
  }
};
```
