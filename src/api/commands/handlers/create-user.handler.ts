import { Logger } from '@nestjs/common'
import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs'
import { InjectRepository } from '@nestjs/typeorm'

import { CreateUserCommand } from '../impl/create-user.command'
import { UserCreatedEvent } from '../../events/impl/user-created.event'
import { User } from '../../../domain/models/user.model'
import { UserRepository } from '../../../infrastucture/repository/user.repository'
import { UserEntity } from '../../../infrastucture/entities/user.entity'

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: UserRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateUserCommand) {
    Logger.log('CreateUserHandler', 'CreateUserCommand')

    const { userDto } = command
    console.log(userDto)

    const result = await this.repository.save({ ...userDto })
    console.log(result)

    const user = this.publisher.mergeObjectContext(
      new User(result.userId, result.firstName, result.lastName, false),
    )
    user.publish(new UserCreatedEvent(userDto))
    user.commit()
    return user
  }
}
