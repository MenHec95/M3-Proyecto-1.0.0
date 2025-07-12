import { ScheduleAppointmentDTO } from "../dtos/AppointmentDTO";
import { IAppointment, Status } from "../interfaces/AppointmentInterface";
import { getUserByIdService } from "./UserService";

let id: number = 1;
const appointmentList: IAppointment[] = [];

// Implementar una función que pueda retornar el arreglo completo de turnos.

export const getAppointment = async (): Promise<IAppointment[]> => {
  return appointmentList;
};

// Implementar una función que pueda obtener el detalle de un turno por ID.
export const getAppointmentByIdService = async (id: number): Promise<IAppointment> => {
  const appointmentFound = appointmentList.find((app) => app.id === id);
  if (!appointmentFound) throw new Error(`El turno con Id: ${id} no se encuentra`);
  return appointmentFound;
};

// Implementar una función que pueda crear un nuevo turno, siempre guardando, además, el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO.

export const createAppointmentService = async (appointment: ScheduleAppointmentDTO): Promise<IAppointment> => {
  await getUserByIdService(appointment.userId);
  const appFound = appointmentList.find((app) => new Date(app.date).getTime() === new Date(appointment.date).getTime() && app.time === appointment.time && app.userId === appointment.userId);

  if (appFound) throw new Error(`El turno ya existe para el usuario con Id: ${appointment.userId}`);

  const newAppointment: IAppointment = {
    id: id++,
    date: new Date(appointment.date),
    time: appointment.time,
    userId: appointment.userId,
    status: Status.Active,
  };
  appointmentList.push(newAppointment);
  return newAppointment;
};

// Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.

export const cancelAppointmentById = async (id: number): Promise<IAppointment> => {
  const appCancelFound = appointmentList.find((app) => app.id === id);

  if (!appCancelFound) throw new Error(`Turno con Id: ${id} no encontrado`);
  appCancelFound.status = Status.Cancelled;

  return appCancelFound;
};
