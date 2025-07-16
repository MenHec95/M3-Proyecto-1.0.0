import { AppDataSourceConection } from "../config/data-source";
import { IUserRegisterDTO, UserResponseDTO } from "../dtos/UserDTO";
import { User } from "../entities/User.Entity";
import { IUser } from "../interfaces/UserInterface";
import { getCredentialsService } from "./CredentialService";

const UsersList: IUser[] = [];

export const getUserService = async (): Promise<UserResponseDTO[]> => {
  return UsersList.map((user) => {
    return {
      name: user.name,
      email: user.email,
    };
  });
};

export const getUserByIdService = async (Id: number): Promise<UserResponseDTO> => {
  const userFound = UsersList.find((user) => user.id === Id);
  if (userFound) return { email: userFound.email, name: userFound.name };
  else throw new Error("Usuario no encontrado");
};

export const UserServiceRegister = async (user: IUserRegisterDTO): Promise<UserResponseDTO> => {
  const resultadoTransaccion = await AppDataSourceConection.transaction(async (entityManager) => {
    const idUserCredential = await getCredentialsService(entityManager, user.username, user.password);
    const newUser: User = entityManager.create(User, {
      name: user.name,
      email: user.email,
      nDni: user.nDni,
      birthdate: user.birthdate,
      credential: idUserCredential,
    });
    await entityManager.save(newUser);
    return newUser;
  });
  return resultadoTransaccion;
};
