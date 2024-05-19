module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      development: {
        plugins: ["react-native-paper/babel"],
      },
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};
