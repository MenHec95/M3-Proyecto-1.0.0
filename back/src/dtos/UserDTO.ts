export interface IUserRegisterDTO {
  name: string;
  email: string;
  dni: number;
  username: string;
  password: string;
}

export interface IUserLoginDTO {
  username: string;
  password: string;
}
