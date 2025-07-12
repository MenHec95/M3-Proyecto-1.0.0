import { Request, Response, Router } from "express";
import { getAppointmentController, getAppointmentByIdController, scheduleAppointmentController, cancelAppointmentController } from "../controllers/appointmentController";
import { ScheduleAppointmentDTO } from "../dtos/AppointmentDTO";

const appointmentRouter: Router = Router();

appointmentRouter.get("/", (req: Request, res: Response): Promise<void> => getAppointmentController(req, res));

appointmentRouter.get("/:id", (req: Request<{ id: string }>, res: Response): Promise<void> => getAppointmentByIdController(req, res));

appointmentRouter.post("/schedule", (req: Request<unknown, unknown, ScheduleAppointmentDTO>, res: Response): Promise<void> => scheduleAppointmentController(req, res));

appointmentRouter.put("/cancel/:id", (req: Request<{ id: string }>, res: Response): Promise<void> => cancelAppointmentController(req, res));

export default appointmentRouter;
