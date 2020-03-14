import { Logger } from '@nestjs/common'
import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs'
import { InjectRepository } from '@nestjs/typeorm'

import { CreateUserCommand } from '../impl/create-user.command'
import { UserRepository } from '../../repository/user.repository'
import { UserEntity } from '../../entities/user.entity'
import { User } from '../../models/user.model'

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
    user.userCreated()
    user.commit()
    return user
  }
}
