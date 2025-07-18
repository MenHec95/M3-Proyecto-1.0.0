import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Credential } from "./Credentials.entities";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "varchar", length: 255, nullable: false })
  name: string;
  @Column({ type: "varchar", length: 255, unique: true, nullable: false })
  email: string;
  @Column({ type: "date", nullable: false })
  birthdate: Date;
  @Column({ type: "int", unique: true, nullable: false })
  nDni: number;

  @OneToOne(() => Credential, { cascade: true })
  @JoinColumn()
  credential: Credential;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
