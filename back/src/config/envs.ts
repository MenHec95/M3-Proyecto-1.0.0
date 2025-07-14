import "dotenv/config";
import { LoggerOptions } from "typeorm";

export const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

export const DB_HOST: string | undefined = process.env.DB_HOST;
export const DB_PORT: number | undefined = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432;
export const DB_USERNAME: string | undefined = process.env.DB_USERNAME;
export const DB_PASSWORD: string | undefined = process.env.DB_PASSWORD;
export const DB_NAME: string | undefined = process.env.DB_NAME;
export const DB_LOG: LoggerOptions = process.env.DB_LOG ? process.env.DB_LOG === "true" : ["error"];
export const DB_SYNC: boolean = process.env.DB_SYNC ? process.env.DB_SYNC === "true" : false;
export const DB_DROP: boolean = process.env.DB_DROP ? process.env.DB_DROP === "true" : false;
