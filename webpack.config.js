const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  template: './sandbox/index.html',
  fileName: './index.html',
});

const NODE_ENV = process.env.NODE_ENV || 'production';
const devMode = NODE_ENV === 'development';

module.exports = {
  context: __dirname,
  entry: devMode ? './sandbox/index.js' : './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: './index.js',
    publicPath: '/',
    chunkFilename: './[name].js',
    libraryTarget: !devMode ? 'commonjs2' : 'this',
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  externals: !devMode ? {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  } : {},
  plugins: devMode ? [htmlPlugin] : [],
  devServer: {
    contentBase: './dist',
    port: 4444,
    historyApiFallback: true,
    publicPath: '/',
  },
};
