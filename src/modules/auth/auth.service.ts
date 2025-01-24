import { Injectable } from '@nestjs/common';
import { LoginRequestDto, RegisterRequestDto } from './dto/auth.dto';
import { ProfilesService } from '../profiles/profiles.service';
import { DatabaseError, isApplicationError } from '@utils/error/errors';
import { ProfileEntity } from '../profiles/entities/profile.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly profileService: ProfilesService,
    private readonly jwtService: JwtService,
  ) {}
  async register(
    registerRequestDto: RegisterRequestDto,
  ): Promise<ProfileEntity | DatabaseError> {
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

  async login(loginRequestDto: LoginRequestDto) {
    // Ottengo il profilo
    const profileResponse = await this.profileService.findOneByEmail(
      loginRequestDto.email,
    );

    if (isApplicationError(profileResponse)) {
      return profileResponse;
    }

    // Verifico la password
    if (profileResponse.password !== loginRequestDto.password) {
      return 'non ok';
    }
    return this.jwtService.sign({ message: 'FUNZIONO' });

    // Resistuisco il token
  }
}
