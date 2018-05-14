module.exports = {
  comments: false,
  presets: [
    ["@babel/preset-env", {
      targets: {
        node: 4.0,
        browsers: ["last 2 versions"],
      },
    }],
  ],
  ignore: [
    '**/*.test.js',
  ]
};
