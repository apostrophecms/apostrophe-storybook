const path = require('path')

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
        'eslint-loader'
      ],
      include: path.resolve(__dirname, '../')
    },
    {
    test: /\.scss$/,
    loaders: [
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          // Provide path to the file with resources
          resources: path.resolve(__dirname, '../src/scss/app.scss')
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  })

  return config;
}
