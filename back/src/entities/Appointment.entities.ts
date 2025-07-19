import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Status } from "../interfaces/AppointmentInterface";
import { User } from "./User.Entity";

@Entity("appointments")
export class Appointments {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: Date, nullable: false })
  date: Date;

  @Column({ type: "varchar", length: 5, nullable: false })
  time: string;
  @Column({ type: "varchar", length: 9, nullable: false, default: Status.Active })
  Status: Status;

  @ManyToOne(() => User, (user) => user.appointments, { nullable: false })
  @JoinColumn()
  user: User;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
