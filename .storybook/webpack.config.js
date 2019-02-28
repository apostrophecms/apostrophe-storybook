const path = require('path')

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push(
    {
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
      'sass-loader'
    ],
    include: path.resolve(__dirname, '../')
  })

  // Return the altered config
  return storybookBaseConfig
}
