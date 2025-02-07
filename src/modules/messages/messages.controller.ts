import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { GetProfileId } from '../auth/profile.decorator';

@Controller('chats/:chatId/messages')
export class MessagesController {
  //   constructor(private readonly messagesService: MessagesService) {}

  @Post()
  create(
    @Param('chatId') chatId: string,
    @Body() createMessageDto: CreateMessageDto,
    @GetProfileId() profileId: string,
  ) {
    console.log(chatId, createMessageDto, profileId);
    return 'FUNZIONO';
  }
}
