import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs'
import { VerifyUserCommand } from '../impl/verify-user.command'
import { UserRepository } from '../../repository/user.repository'
import { Logger } from '@nestjs/common'

@CommandHandler(VerifyUserCommand)
export class VerifyUserHandler implements ICommandHandler<VerifyUserCommand> {
  constructor(
    private readonly repository: UserRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: VerifyUserCommand) {
    Logger.log('VerifyUserHandler', 'VerifyUserCommand')
  }
}
