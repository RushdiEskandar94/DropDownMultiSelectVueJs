# Vue Dropdown Component

This project demonstrates how to create a reusable Vue dropdown component with custom options and translations.

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/RushdiEskandar94/DropDownVueJs.git
   cd DropDownVueJs

### Project Directory Structure

Your project directory should look like this:

  DropDownVueJs/
│
├── dist/
│ ├── index.html
│ ├── bundle.js
│ ├── screenshot.png
│
├── src/
│ ├── index.js
│ ├── DropdownComponent.vue
│
├── node_modules/
│
├── package.json
├── package-lock.json
├── README.md
├── webpack.config.js

### Full Project Example

npm install

npm start


npm run build


Here is the complete content of each file for reference:

#### `webpack.config.js`

```javascript
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
