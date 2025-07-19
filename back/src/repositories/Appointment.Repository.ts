import { AppDataSourceConection } from "../config/data-source";
import { Appointments } from "../entities/Appointment.entities";
import moment from "moment";
import { Status } from "../interfaces/AppointmentInterface";

const openTime: string = "09:00:00";
const closeTime: string = "17:00:00";
const formatHour: string = "HH:mm:ss";
const difHour: number = 24;
const noWorkDay: number[] = [0, 6];

export const AppointmentRepository = AppDataSourceConection.getRepository(Appointments).extend({
  validateAllowAppointment: function (date: Date, time: string): void {
    const appointmentDate = new Date(date);
    const appDateString = appointmentDate.toISOString().split("T")[0];
    const appDateHourString = `${appDateString}T${time}:00`;
    const appSelect = moment(appDateHourString, moment.ISO_8601, true);
    const now = moment();

    if (!appSelect.isValid()) {
      throw new Error("La fecha y hora del turno no son válidas");
    }

    if (appSelect.isBefore(now)) {
      throw new Error("No se pueden agendar turnos pasados");
    }

    if (appSelect.diff(now, "hours") < difHour) {
      throw new Error("No se pueden seleccionar turnos inferiores a 24 hs");
    }

    const appTime = appSelect.format(formatHour);
    const open = moment(openTime, formatHour);
    const close = moment(closeTime, formatHour);
    const appSelectTime = moment(appTime, formatHour);

    if (appSelectTime.isBefore(open) || appSelectTime.isAfter(close)) {
      throw new Error("El turno seleccionado esta fuera de horario");
    }

    if (noWorkDay.includes(appSelect.day())) {
      throw new Error("No se pueden tomar turnos en esos dias");
    }
  },
  validateExistAppointment: async function (userId: number, date: Date, time: string): Promise<void> {
    const appointmentFound = await this.findOne({
      where: {
        user: {
          id: userId,
        },
        time: time,
        date: date,
        Status: Status.Active,
      },
    });
    if (appointmentFound) {
      throw new Error("Ya hay un turno asignado con esta fecha y hora");
    }
  },
});
