import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET, // Debe coincidir con la clave secreta utilizada en JwtModule
    });
  }

  async validate(payload: any) {
    // Aquí puedes realizar validaciones adicionales, por ejemplo, buscar el usuario en la base de datos
    if (!payload || !payload.username) {
      throw new UnauthorizedException('Invalid token');
    }
    return { userId: payload.sub, username: payload.username };
  }
}
