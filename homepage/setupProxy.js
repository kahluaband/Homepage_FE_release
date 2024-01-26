import { createProxyMiddleware } from "http-proxy-middleware";

const baseURL = "https://kahluaband.com/";

export default function (app) {
  app.use(
    createProxyMiddleware("/apply", {
      target: baseURL,
      changeOrigin: true,
    })
  );
}
