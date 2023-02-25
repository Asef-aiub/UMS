import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class AssignmentInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  courseId: number;

  @Column()
  subject: string;

  @Column()
  Details: string;

  @Column()
  created_date: Date;

  @Column()
  due_date: Date;
}
