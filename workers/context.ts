import { createContext } from "react-router";
import type { ExecutionContext } from "@cloudflare/workers-types";

export const cloudflareContext = createContext<{
  env: Env;
  ctx: ExecutionContext;
}>();