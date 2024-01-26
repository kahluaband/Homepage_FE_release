import { createProxyMiddleware } from "http-proxy-middleware";

const baseURL = "https://kahluaband.com/";

export default function (app) {
  app.use(
    createProxyMiddleware("/**", {
      target: baseURL,
      changeOrigin: true,
    })
  );
}
