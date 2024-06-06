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
      'contexts': './src/contexts',
      'routes': './src/routes',
      'configs': './src/configs',
    }
  }]]
};
