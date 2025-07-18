import { AppDataSourceConection, UserModel } from "../config/data-source";
import { IUserRegisterDTO, UserLoginSucDTO, UserResponseDTO } from "../dtos/UserDTO";
import { User } from "../entities/User.Entity";
//import { IUser } from "../interfaces/UserInterface";
import { getCredentialsService, userCredencialServiceCheck } from "./CredentialService";

//const UsersList: IUser[] = [];

export const getUserService = async (): Promise<UserResponseDTO[]> => {
  return await UserModel.find();
};

export const getUserByIdService = async (Id: number): Promise<User | null> => {
  const userFound = await UserModel.findOne({
    where: {
      id: Id,
    },
    relations: ["credential"],
  }); //UsersList.find((user) => user.id === Id);
  if (userFound) return userFound;
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
  return {
    name: resultadoTransaccion.name,
    email: resultadoTransaccion.email,
  };
};

export const loginUserService = async (username: string, password: string): Promise<UserLoginSucDTO> => {
  const userId: number = await userCredencialServiceCheck(username, password);

  const userFound: User | null = await UserModel.findOne({
    where: {
      credential: {
        id: userId,
      },
    },
  });

  return {
    id: userFound?.id ?? 0,
    name: userFound?.name ?? "",
    email: userFound?.email ?? "",
    birthdate: userFound?.birthdate ?? new Date(),
    nDni: userFound?.nDni ?? 0,
  };
};
