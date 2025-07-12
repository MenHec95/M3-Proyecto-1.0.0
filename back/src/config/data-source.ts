import { DataSource } from "typeorm";

export const AppDataSourceConection = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "menhec95",
  password: "311218",
  database: "pt27",
  logging: "all",
  entities: [],
  synchronize: true,
  dropSchema: true,
});
