const { override, fixBabelImports, addWebpackResolve } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css",
  }),
    // addWebpackResolve({
    //     extensions: [".js", ".json", "jsx"]
    // })
);
