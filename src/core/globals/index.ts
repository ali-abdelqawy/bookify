import { Db } from "../db";

globalThis.STATUS_CODES = { OK: 200, CREATED: 201, UNAUTHORIZED: 401, FORBIDDEN: 403 };
Db.init().connect();
