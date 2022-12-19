const config = {
  mode: 'production', // "production" | "development" | "none"
  resolve: {
    extensions: ['*', '.mjs', '.js', '.json'],
    zlib: 'browserify-zlib',
    path: 'path-browserify',
    crypto: 'crypto-browserify',
    stream: 'stream-browserify',
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
};

module.exports = config;
