# Vue Dropdown Component

This project demonstrates how to create a reusable Vue dropdown component with custom options and translations.

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/RushdiEskandar94/DropDownVueJs.git
   cd DropDownVueJs

### Project Directory Structure

Your project directory should look like this:


### Description of Folders and Files

- **dist/**: Contains the bundled and minified version of the project for deployment.
  - `index.html`: The main HTML file.
  - `bundle.js`: The bundled JavaScript file.
  - `screenshot.png`: A screenshot of the component.

- **src/**: Contains the source code of the project.
  - `index.js`: The entry point of the application.
  - `DropdownComponent.vue`: The Vue.js component file for the dropdown menu.

- **node_modules/**: Contains all the npm dependencies.

- **package.json**: Lists the project dependencies and scripts.

- **package-lock.json**: Records the exact versions of the dependencies installed.

- **README.md**: This file, which provides an overview of the project.

- **webpack.config.js**: Configuration file for webpack, used to bundle the project.

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```bash

cd DropDownVueJs

npm install


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
