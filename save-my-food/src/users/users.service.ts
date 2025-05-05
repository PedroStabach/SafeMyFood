import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [{ id: 1, name: 'João' }];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(u => u.id === id);
  }

  create(name: string) {
    const id = this.users.length + 1;
    const newUser = { id, name };
    this.users.push(newUser);
    return newUser;
  }
}
