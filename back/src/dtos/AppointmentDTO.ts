export interface ScheduleAppointmentDTO {
  date: Date;
  time: string;
  status: Status;
}

export enum Status {
  Active = "active",
  Cancelled = "cancelled",
}
