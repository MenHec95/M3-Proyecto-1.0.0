export interface IUserRegisterDTO {
  name: string;
  email: string;
  nDni: number;
  birthdate: Date;
  username: string;
  password: string;
}

export interface IUserLoginDTO {
  username: string;
  password: string;
}

export interface UserResponseDTO {
  name: string;
  email: string;
}

export interface UserLoginSucDTO {
  id: number;
  name: string;
  email: string;
  birthdate: Date;
  nDni: number;
}
