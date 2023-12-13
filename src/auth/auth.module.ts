import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { ApiKeyStrategy } from './strategies/api-key.strategy';

@Module({
  imports: [PassportModule],
  providers: [AuthService, ApiKeyStrategy],
})
export class AuthModule {}
