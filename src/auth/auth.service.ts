import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../domains/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthUser } from 'src/utils/auth.user';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByAccountId(username);
    if (!user) {
      throw new UnauthorizedException();
    }
    const isMatch = await bcrypt.compare(pass, user?.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }

    AuthUser.setId(user.id);

    const payload = { id: user.id, accountId: user.accountId };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
