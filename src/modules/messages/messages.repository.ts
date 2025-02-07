import { MongoRepository } from 'typeorm/repository/MongoRepository';
import { ChatEntity } from '../chats/entities/chat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { MessageEntity } from './entities/message.entity';
import { DatabaseError } from '@utils/error/errors';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessagesRepository {
  constructor(
    @InjectRepository(ChatEntity)
    private readonly dbConnection: MongoRepository<ChatEntity>,
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
