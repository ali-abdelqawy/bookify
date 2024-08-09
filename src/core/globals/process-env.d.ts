import { Algorithm } from "jsonwebtoken";
import { NodeEnv } from "../types";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: NodeEnv;
      PORT: string;
      DB_URL: string;
      DB_NAME: string;
      DB_USER: string;
      DB_PASSWORD: string;
      SERVER_TIMEOUT_MS: number;
    }
  }
}

export {};
