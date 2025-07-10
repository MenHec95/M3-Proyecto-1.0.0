import { ICredentials } from "../interfaces/CredencialsInterface";
import { webcrypto } from "crypto";

// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.
let id = 1;
const credencialsList: ICredentials[] = [];

const crypPass = async (text: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hash = await webcrypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hash));
  const hashex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashex;
};

const UserExistCheck = (username: string): void => {
  const credencialFound = credencialsList.find((creden) => creden.username === username);
  if (credencialFound) throw new Error(`El usuario: ${username} ya existe, intente con otro`);
};

export const getCredentialsService = async (username: string, password: string): Promise<number> => {
  UserExistCheck(username);
  const credencial: ICredentials = {
    id: id++,
    username: username,
    password: await crypPass(password),
  };
  credencialsList.push(credencial);
  return credencial.id;
};

// Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales.

export const userCredencialServiceCheck = async (username: string, password: string): Promise<number> => {
  const credentialFound = credencialsList.find((cred) => cred.username === username);

  if (credentialFound?.password === (await crypPass(password))) return credentialFound.id;
  else throw new Error("Usuario o Contraseña incorrecto");
};
