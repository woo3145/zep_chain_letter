import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { AuthService } from '../auth.service';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(
  HeaderAPIKeyStrategy,
  'apiKey',
) {
  constructor(private readonly authService: AuthService) {
    super(
      { header: 'apiKey', prefix: '' },
      true,
      async (apiKey: string, done: (error: Error, data) => void) => {
        if (this.authService.validateApiKey(apiKey)) {
          done(null, true);
        }
        done(new UnauthorizedException(), null);
      },
    );
  }
}
