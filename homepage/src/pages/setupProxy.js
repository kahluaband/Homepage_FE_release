const { createProxyMiddleware } = require("http-proxy-middleware");

const baseURL = "https://kahluaband.com/";

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/apply", {
      target: baseURL,
      changeOrigin: true,
    })
  );
};
