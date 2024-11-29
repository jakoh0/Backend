import { Injectable } from '@nestjs/common';
import { RegisterRequestDto } from './dto/auth.dto';
import { ProfilesService } from '../profiles/profiles.service';
import { DatabaseError } from '@utils/error/errors';
import { Profile } from '../profiles/entities/profile.entity';

@Injectable()
export class AuthService {
  constructor(private readonly profileService: ProfilesService) {}
  async register(
    registerRequestDto: RegisterRequestDto,
  ): Promise<Profile | DatabaseError> {
    // Verifico se esiste il profilo con questa email (FindProfile)

    // Esiste?
    // - Si
    // -- Error => Profilo già registrato
    // - No
    // -- Registro
    // -- Crep un Profilo
    return await this.profileService.create(registerRequestDto);
    // -- Mando la mail
    // -- OK => Registrazione completata
  }
}
