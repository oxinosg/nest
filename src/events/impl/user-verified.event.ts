import { IEvent } from '@nestjs/cqrs'

export class UserVerifiedEvent implements IEvent {
  constructor(public readonly userId: string) {}
}
