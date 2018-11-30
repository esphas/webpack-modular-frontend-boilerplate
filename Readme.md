
#

## Install Webpack

```
yarn add -D webpack webpack-cli
```

## Directory Structure

```
- <Project Dir>
  - src
    * source files, along with all kinds of assets
  - dist
    * distributed files only
  - public
    * static contents to be copied directly
  - config
    * configs for webpack related
  + scripts
  + helpers
  * node_modules, package.json, other configs, miscs, et al
```

## Get Things Going

### Basic: Babel, PostCSS, along with some plain loaders

- Use [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) to generate htmls out of templates
- Use [Browserslist](https://github.com/ai/browserslist)
- Use [Babel](https://babeljs.io/), and of course [babel-loader](https://github.com/babel/babel-loader)
- Use [style-loader](https://github.com/webpack-contrib/style-loader) and [css-loader](https://github.com/webpack-contrib/css-loader)
- Use [PostCSS](https://postcss.org/) and [postcss-loader](https://github.com/postcss/postcss-loader)
  - [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
  - [cssnano](https://github.com/cssnano/cssnano)
- Use [url-loader](https://github.com/webpack-contrib/url-loader) and [file-loader](https://github.com/webpack-contrib/file-loader)
- Setup [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- Other plugins
  - [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)
  - [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin)

To put it together:
```
yarn add -D html-webpack-plugin
yarn add -D @babel/core @babel/preset-env @babel/polyfill babel-loader
yarn add -D style-loader css-loader
yarn add -D postcss postcss-loader postcss-preset-env cssnano
yarn add -D url-loader file-loader
yarn add -D webpack-dev-server
yarn add -D clean-webpack-plugin copy-webpack-plugin
```

Note: `.m.css` for css modules, and `.css` for common (global) css

### ESLint

- [ESLint](https://eslint.org/)
- [eslint-loader](https://github.com/webpack-contrib/eslint-loader)

```
yarn add -D eslint
yarn add -D eslint-loader
```

### Pug

- [Pug](https://pugjs.org/)
- [pug-loader](https://github.com/pugjs/pug-loader)

```
yarn add -D pug
yarn add -D pug-loader
```
