const path = require('path');

module.exports = {
    devServer: {
      historyApiFallback: true
   },
   entry: './src/index.js',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      publicPath: '/',
   },
      module: {
      rules: [
         {
            test: /\.js$/,
            use: [
            {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-react', {runtime: 'automatic'}],
              ],
            },
          },
            ]
         },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};