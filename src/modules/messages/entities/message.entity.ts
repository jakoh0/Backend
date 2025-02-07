import { ObjectId } from 'mongodb';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
} from 'typeorm';
import { v4 } from 'uuid';

@Entity('messages')
export class MessageEntity {
  @ObjectIdColumn()
  private _id: ObjectId;

  @Column({ unique: true })
  id: string;

  @Column()
  text: string;

  @Column()
  chatId: string;

  @Column()
  senderId: string;

  @CreateDateColumn()
  createdAt: Date;

  @BeforeInsert()
  private generateId() {
    this.id = v4();
  }
}
