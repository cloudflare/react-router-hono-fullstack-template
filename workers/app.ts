import { Hono } from "hono";
import { createRequestHandler, RouterContextProvider } from "react-router";
import { cloudflareContext } from "./context";

const app = new Hono();

// Add more routes here

app.get("*", (c) => {
  const requestHandler = createRequestHandler(
    () => import("virtual:react-router/server-build"),
    import.meta.env.MODE,
  );

  const context = new RouterContextProvider();
  context.set(cloudflareContext, { env: c.env, ctx: c.executionCtx });


  return requestHandler(c.req.raw, context);
});

export default app;
