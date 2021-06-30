module.exports = {
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__test__\//));
    return config;
  },
};
