import { Test, TestingModule } from '@nestjs/testing';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import {UsersModule} from './../users/users.module';
import {LocalStrategy} from './local/local.strategy';
import {JwtStrategy} from './jwt/jwt.strategy';
import {Jwt2faStrategy} from './jwt-2fa/jwt-2fa.strategy';


describe('AuthenticationController', () => {
  let controller: AuthenticationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
		imports:[UsersModule, JwtModule.register({
			secret: 'secret',
			signOptions: { expiresIn: '1d' },
		  })],
		  controllers: [AuthenticationController],
		  providers: [AuthenticationService, LocalStrategy, JwtStrategy, Jwt2faStrategy]
    }).compile();

    controller = module.get<AuthenticationController>(AuthenticationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
