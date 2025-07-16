import { Request, Response } from "express";
import { IUserLoginDTO, IUserRegisterDTO } from "../dtos/UserDTO";
import { getUserByIdService, getUserService, UserServiceRegister } from "../services/UserService";
import { PostgresError } from "../interfaces/ErrorInterfaces";

export const getUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getUserService();
    res.status(200).json({
      message: "Obtener el listado de todos los usuarios.",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : "Error Desconcido",
    });
  }
};

export const getUserByIdController = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const user = await getUserByIdService(parseInt(req.params.id, 10));
    res.status(200).json({
      message: "Obtener el detalle de un usuario específico.",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : "Error Desconcido",
    });
  }
};

export const registerUserController = async (req: Request<unknown, unknown, IUserRegisterDTO>, res: Response): Promise<void> => {
  try {
    const registerUser = await UserServiceRegister(req.body);

    res.status(201).json({
      message: "Registro de un nuevo usuario.",
      data: registerUser,
    });
  } catch (error) {
    const err = error as PostgresError;
    res.status(500).json({
      message: err instanceof Error ? (err.detail ? err.detail : err.message) : "Error Desconcido",
    });
  }
};

export const loginUserController = async (req: Request<unknown, unknown, IUserLoginDTO>, res: Response): Promise<void> => {
  res.status(201).json({
    message: "Login del usuario a la aplicación.",
    data: {},
  });
};
