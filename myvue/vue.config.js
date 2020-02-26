module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true
      }
    }
  },
  outputDir: "../backend/dist/public/",
  transpileDependencies: ["vuetify"]
};
