import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';
import { nanoid } from 'nanoid'

@Entity('developers')
export class Developer {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
  
  @Column()
  email: string;
  
  @Column()
  dateOfBirth: string;

  @BeforeInsert()
  generateId() {
    this.id = `dev_${nanoid()}`
  }
}
