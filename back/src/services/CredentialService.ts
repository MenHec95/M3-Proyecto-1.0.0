import { EntityManager } from "typeorm";

import { Credential } from "../entities/Credentials.entities";
import { ICredentials } from "../interfaces/CredencialsInterface";
import { webcrypto } from "crypto";

// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. Debe retornar el ID del par de credenciales creado.

const credencialsList: ICredentials[] = [];

const crypPass = async (text: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hash = await webcrypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hash));
  const hashex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashex;
};

// const UserExistCheck = async (username: string): Promise<void> => {
//   const credencialFound = await CredentialModel.findOne({
//     where: {
//       username: username,
//     },
//   });
//   if (credencialFound) throw new Error(`El usuario: ${username} ya existe, intente con otro`);
// };

export const getCredentialsService = async (entityManager: EntityManager, username: string, password: string): Promise<Credential> => {
  const credencial: Credential = entityManager.create(Credential, {
    username: username,
    password: await crypPass(password),
  });

  return await entityManager.save(credencial);
};

// Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales.

export const userCredencialServiceCheck = async (username: string, password: string): Promise<number> => {
  const credentialFound = credencialsList.find((cred) => cred.username === username);

  if (credentialFound?.password === (await crypPass(password))) return credentialFound.id;
  else throw new Error("Usuario o Contraseña incorrecto");
};
