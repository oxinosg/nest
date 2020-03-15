import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs'
import { Logger } from '@nestjs/common'

import { WelcomeUserCommand } from '../impl/welcome-user.command'
import { UserRepository } from '../../../infrastucture/repository/user.repository'

@CommandHandler(WelcomeUserCommand)
export class WelcomeUserHandler implements ICommandHandler<WelcomeUserCommand> {
  constructor(
    private readonly repository: UserRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: WelcomeUserCommand) {
    console.log('===========')
    console.log('===========')
    Logger.log('WelcomeUserHandler', 'WelcomeUserCommand')
  }
}
