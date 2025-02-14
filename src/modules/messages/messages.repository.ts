import { MongoRepository } from 'typeorm/repository/MongoRepository';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { MessageEntity } from './entities/message.entity';
import { DatabaseError } from '@utils/error/errors';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessagesRepository {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly dbConnection: MongoRepository<MessageEntity>,
  ) {}
  async create(
    chatId: string,
    createMessagesDto: CreateMessageDto,
    senderId: string,
  ): Promise<MessageEntity | DatabaseError> {
    try {
      const messageToSave = new MessageEntity();
      messageToSave.text = createMessagesDto.text;
      messageToSave.senderId = senderId;
      messageToSave.chatId = chatId;
      return await this.dbConnection.save(messageToSave);
    } catch (cause) {
      console.log(cause);
      return new DatabaseError('Impossibile salvare il messaggio', { cause });
    }
  }
}
