module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [["module-resolver", {
    root: ["."],
    alias: {
      'components': './src/components',
      'utils': './src/utils',
      'assets': './src/assets',
      'modules': './src/modules',
      'hooks': './src/hooks',
      'redux-store': './src/redux-store',
      'routes': './src/routes',
      'configs': './src/configs',
    }
  }]]
};
