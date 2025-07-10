import { IUserRegisterDTO, UserResponseDTO } from "../dtos/UserDTO";
import { IUser } from "../interfaces/UserInterface";
import { getCredentialsService } from "./CredentialService";

const UsersList: IUser[] = [];
let id: number = 1;

// Implementar una función que pueda retornar el arreglo completo de usuarios.
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
// Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.

export const UserServiceRegister = async (user: IUserRegisterDTO): Promise<UserResponseDTO> => {
  const idUserCredential = await getCredentialsService(user.username, user.password);
  const newUser: IUser = {
    id: id++,
    name: user.name,
    email: user.email,
    nDni: user.dni,
    birthdate: user.birthday,
    credentialsId: idUserCredential,
  };
  UsersList.push(newUser);
  return {
    name: newUser.name,
    email: newUser.email,
  };
};
