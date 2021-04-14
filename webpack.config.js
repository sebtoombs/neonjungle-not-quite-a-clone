const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isEnvDevelopment = argv.mode === "development";

  return {
    mode: argv.mode || "development",
    entry: {
      main: ["./src/index.js"],
    },
    output: {
      path: path.join(process.cwd(), "dist"),
      filename: "[name].js",
    },
    module: {
      rules: [
        // Disable require.ensure as it's not a standard language feature.
        { parser: { requireEnsure: false } },
        { test: /\.hbs$/, loader: "handlebars-loader" },
        {
          test: /\.css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                // modules: true
              },
            },
            {
              loader: "postcss-loader",
            },
          ],
          // use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
        {
          oneOf: [
            {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              include: path.join(process.cwd(), "assets/src"),
              loader: require.resolve("babel-loader"),
              options: {
                babelrc: false,
                presets: ["@babel/preset-env"],
                plugins: [
                  require.resolve("@babel/plugin-proposal-optional-chaining"),
                ].filter(Boolean),
                // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true,
                cacheCompression: false,
                compact: false,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "!!handlebars-loader!./src/views/main.hbs",
        inject: "body",
        scriptLoading: "defer",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
    ].filter(Boolean),
  };
};
