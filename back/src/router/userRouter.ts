import { Request, Response, Router } from "express";
import { getUserController, getUserByIdController, registerUserController, loginUserController } from "../controllers/userController";
import { IUserLoginDTO, IUserRegisterDTO } from "../dtos/UserDTO";

const userRouter: Router = Router();

userRouter.get("/", (req: Request, res: Response): Promise<void> => getUserController(req, res));

userRouter.get("/:id", (req: Request<{ id: string }>, res: Response): Promise<void> => getUserByIdController(req, res));

userRouter.post("/register", (req: Request<unknown, unknown, IUserRegisterDTO>, res: Response): Promise<void> => registerUserController(req, res));

userRouter.post("/login", (req: Request<unknown, unknown, IUserLoginDTO>, res: Response): Promise<void> => loginUserController(req, res));

export default userRouter;
