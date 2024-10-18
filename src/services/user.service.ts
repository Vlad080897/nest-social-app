import { Injectable } from '@nestjs/common';
import users, { User } from 'src/db';

@Injectable()
export class UserService {
  constructor() {}

  findUser(email: string): User {
    return users.find((user) => user.email === email);
  }
}
