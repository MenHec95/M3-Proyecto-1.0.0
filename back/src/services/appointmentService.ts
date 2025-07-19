import { ScheduleAppointmentDTO } from "../dtos/AppointmentDTO";
import { Appointments } from "../entities/Appointment.entities";
import { Status } from "../interfaces/AppointmentInterface";
import { AppointmentRepository } from "../repositories/Appointment.Repository";
import { getUserByIdService } from "./UserService";

// Implementar una función que pueda retornar el arreglo completo de turnos.

export const getAppointment = async (): Promise<Appointments[]> => {
  return await AppointmentRepository.find();
};

// Implementar una función que pueda obtener el detalle de un turno por ID.
export const getAppointmentByIdService = async (id: number): Promise<Appointments | null> => {
  const appointmentFound = await AppointmentRepository.findOne({
    where: {
      id: id,
    },
  });
  if (!appointmentFound) throw new Error(`El turno con Id: ${id} no se encuentra`);
  return appointmentFound;
};

// Implementar una función que pueda crear un nuevo turno, siempre guardando, además, el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO.

export const createAppointmentService = async (appointment: ScheduleAppointmentDTO): Promise<ScheduleAppointmentDTO> => {
  await getUserByIdService(appointment.userId);
  AppointmentRepository.validateAllowAppointment(appointment.date, appointment.time);
  await AppointmentRepository.validateExistAppointment(appointment.userId, appointment.date, appointment.time);
  const newAppointment: Appointments = AppointmentRepository.create({
    date: appointment.date,
    time: appointment.time,
    user: {
      id: appointment.userId,
    },
  });
  await AppointmentRepository.save(newAppointment);
  return {
    date: newAppointment.date,
    time: newAppointment.time,
    userId: newAppointment.user.id,
  };
};

// Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.

export const cancelAppointmentById = async (id: number): Promise<Appointments> => {
  const appCancelFound = await AppointmentRepository.findOne({
    where: {
      id: id,
    },
  });

  if (!appCancelFound) throw new Error(`Turno con Id: ${id} no encontrado`);
  appCancelFound.Status = Status.Cancelled;

  await AppointmentRepository.save(appCancelFound);

  return appCancelFound;
};
