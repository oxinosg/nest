import { IEvent } from '@nestjs/cqrs'
import { CreateUserInput } from '../../types/user.type'

export class UserCreatedEvent implements IEvent {
  constructor(public readonly user: CreateUserInput) {}
}
