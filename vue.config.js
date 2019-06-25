const port = 8080;
const host = "0.0.0.0";
module.exports = {
  lintOnSave: false,
  devServer: {
    disableHostCheck: true,
    port,
    host,
    hotOnly: true,
    clientLogLevel: "warning",
    inline: true,
    proxy: {
      "/api": {
        target: "http://10.110.6.123:8080",
        changeOrigin: true,
        secure: false
      }
    }
  }
};
