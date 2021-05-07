import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 64 })
  firstName!: string;

  @Column({ length: 64, nullable: true })
  lastName?: string;

  @Column({ length: 64 })
  email!: string;

  @Column({ default: true })
  isActive!: boolean;

  @CreateDateColumn({ type: 'timestamp', select: false })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', select: false })
  updatedAt!: Date;
}
