const purgecss = require("@fullhuman/postcss-purgecss");

// postcss.config.js
module.exports = {
  plugins: [
    ["postcss-preset-env"],
    require("postcss-import")({ from: "./src/styles" }),
    require("postcss-simple-vars"),
    require("postcss-at-rules-variables"),
    require("postcss-map")({
      basePath: "./src/styles",
      maps: ["breakpoints.json"],
    }),
    require("postcss-mixins"),
    require("postcss-nested"),
    require("autoprefixer"),
    // purgecss({
    //   content: ["./**/*.hbs"],
    // }),
  ],
};
