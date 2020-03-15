import { ICommand } from '@nestjs/cqrs'

export class VerifyUserCommand implements ICommand {
  constructor(public readonly userId: string) {}
}
