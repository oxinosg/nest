import { ICommand } from '@nestjs/cqrs';

// import { UserDto } from '../../dtos/users.dto';
// import { CreateUserInput } from '../../types/user.type'
import {  User } from '../../graphql'

export class CreateUserCommand implements ICommand {
  constructor(public readonly userDto: User) {}
}
