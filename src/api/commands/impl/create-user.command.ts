import { ICommand } from '@nestjs/cqrs'

import { User } from '../../../graphql'

export class CreateUserCommand implements ICommand {
  constructor(public readonly userDto: User) {}
}
