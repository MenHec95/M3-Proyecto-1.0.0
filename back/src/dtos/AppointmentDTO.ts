export interface ScheduleAppointmentDTO {
  date: Date;
  time: string;
  status: Status;
}

enum Status {
  actve = "Active",
  cancel = "cancelled",
}
