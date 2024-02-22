import { creadentialsInterface } from '@models/interfaces/services';
import { UserService } from '@modules/user/user.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async validateCredentials(credentials: creadentialsInterface) {
    const userLogged = await this.userService.findByEmail(credentials.email);
    if (!userLogged)
      throw new BadRequestException(
        'No existe un usuario con el correo indicado',
      );
    if (
      !this.userService.matchHasshedPassword(
        credentials.password,
        userLogged.password,
      )
    )
      throw new BadRequestException('Clave incorrecta');
    return {
      ...userLogged,
      jwt: this.getToken({ email: userLogged.email, id: userLogged.id }),
    };
  }

  getToken(user: { email: string; id: number }): string {
    const payload = { username: user.email, sub: user.id };
    return this.jwtService.sign(payload);
  }
}
