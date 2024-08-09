import { Algorithm } from "jsonwebtoken";
import { NodeEnv } from "../types";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: NodeEnv;
      PORT: string;
      DB_HOST: string;
      SERVER_TIMEOUT_MS: number;
    }
  }
}

export {};
