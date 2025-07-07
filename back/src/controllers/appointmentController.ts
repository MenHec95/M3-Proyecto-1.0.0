import { Request, Response } from "express";
import { ScheduleAppointmentDTO } from "../dtos/AppointmentDTO";

export const getAppointmentController = (req: Request, res: Response): void => {
  res.status(200).json({
    message: "Obtener el listado de todos los turnos de todos los usuarios.",
    data: [],
  });
};

export const getAppointmentByIdController = (req: Request<{ id: string }>, res: Response): void => {
  res.status(200).json({
    message: "Obtener el detalle de un turno específico.",
    data: {},
  });
};
export const scheduleAppointmentController = (req: Request<unknown, unknown, ScheduleAppointmentDTO>, res: Response): void => {
  res.status(200).json({
    message: "Agendar un nuevo turno.",
    data: {},
  });
};
export const cancelAppointmentController = (req: Request<{ id: string }>, res: Response): void => {
  res.status(200).json({
    message: "Cambiar el estatus de un turno a “cancelled”.",
    data: {},
  });
};
