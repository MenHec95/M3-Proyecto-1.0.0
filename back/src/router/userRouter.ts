import { Request, Response, Router } from "express";
import { getUserController, getUserByIdController, registerUserController, loginUserController } from "../controllers/userController";
import { IUserLoginDTO, IUserRegisterDTO } from "../dtos/UserDTO";

const userRouter: Router = Router();

userRouter.get("/", (req: Request, res: Response): void => getUserController(req, res));

userRouter.get("/:id", (req: Request<{ id: string }>, res: Response): void => getUserByIdController(req, res));

userRouter.post("/register", (req: Request<unknown, unknown, IUserRegisterDTO>, res: Response): void => registerUserController(req, res));

userRouter.post("/login", (req: Request<unknown, unknown, IUserLoginDTO>, res: Response): void => loginUserController(req, res));

export default userRouter;
