import { Injectable } from '@nestjs/common';
import { RegisterRequestDto } from './dto/auth.dto';
import { ProfilesService } from '../profiles/profiles.service';

@Injectable()
export class AuthService {
  constructor(private readonly profileService: ProfilesService){}
  register(registerRequestDto: RegisterRequestDto) {
    // Verifico se esiste il profilo con questa email (FindProfile)

    // Esiste?
    // - Si
    // -- Error => Profilo già registrato
    // - No
    // -- Registro
    // -- Crep un Profilo
    // -- Mando la mail
    // -- OK => Registrazione completata

    return 'Ti sei registrato';
  }
}
