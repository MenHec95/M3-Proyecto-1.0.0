import { Request, Response } from "express";
import { ScheduleAppointmentDTO } from "../dtos/AppointmentDTO";
import { cancelAppointmentById, createAppointmentService, getAppointment, getAppointmentByIdService } from "../services/appointmentService";

export const getAppointmentController = async (req: Request, res: Response): Promise<void> => {
  try {
    const appointment = await getAppointment();

    res.status(200).json({
      message: "Obtener el listado de todos los turnos de todos los usuarios.",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : "Error Desconcido",
    });
  }
};

export const getAppointmentByIdController = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const appbyId = await getAppointmentByIdService(parseInt(req.params.id, 10));
    res.status(200).json({
      message: "Obtener el detalle de un turno específico.",
      data: appbyId,
    });
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : "Error Desconcido",
    });
  }
};
export const scheduleAppointmentController = async (req: Request<unknown, unknown, ScheduleAppointmentDTO>, res: Response): Promise<void> => {
  try {
    const newAppointment = await createAppointmentService(req.body);
    res.status(200).json({
      message: "Agendar un nuevo turno.",
      data: newAppointment,
    });
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : "Error Desconcido",
    });
  }
};
export const cancelAppointmentController = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const cancelApp = await cancelAppointmentById(parseInt(req.params.id, 10));

    res.status(200).json({
      message: "Cambiar el estatus de un turno a “cancelled”.",
      data: cancelApp,
    });
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : "Error Desconcido",
    });
  }
};
