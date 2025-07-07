import { Request, Response } from "express";
import { IUserLoginDTO, IUserRegisterDTO } from "../dtos/UserDTO";

export const getUserController = (req: Request, res: Response): void => {
  res.status(200).json({
    message: "Obtener el listado de todos los usuarios.",
    data: [],
  });
};

export const getUserByIdController = (req: Request<{ id: string }>, res: Response): void => {
  res.status(200).json({
    message: "Obtener el detalle de un turno específico.",
    data: {},
  });
};

export const registerUserController = (req: Request<unknown, unknown, IUserRegisterDTO>, res: Response): void => {
  res.status(201).json({
    message: "Registro de un nuevo usuario.",
    data: {},
  });
};

export const loginUserController = (req: Request<unknown, unknown, IUserLoginDTO>, res: Response): void => {
  res.status(201).json({
    message: "Login del usuario a la aplicación.",
    data: {},
  });
};
