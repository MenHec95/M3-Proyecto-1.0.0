import { DataSource, Repository } from "typeorm";
import { DB_DROP, DB_HOST, DB_LOG, DB_NAME, DB_PASSWORD, DB_PORT, DB_SYNC, DB_USERNAME } from "./envs";
import { User } from "../entities/User.Entity";
import { Credential } from "../entities/Credentials.entities";

export const AppDataSourceConection = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  logging: DB_LOG,
  synchronize: DB_SYNC,
  dropSchema: DB_DROP,
  entities: ["src/entities/**/*.ts"],
});

export const UserModel: Repository<User> = AppDataSourceConection.getRepository(User);

export const CredentialModel: Repository<Credential> = AppDataSourceConection.getRepository(Credential);
