import { Sequelize } from "sequelize";

export class Db {
  private static instance: Db;
  public client: Sequelize;

  private constructor() {
    this.client = new Sequelize(
      `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${process.env.DB_NAME}`
    );
  }

  public static get(): Db {
    if (!this.instance) {
      this.instance = new Db();
    }
    return this.instance;
  }
}
