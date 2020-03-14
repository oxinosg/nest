import { IEventHandler, EventsHandler } from '@nestjs/cqrs'
import { UserVerifiedEvent } from '../impl/user-verified.event'
import { Logger } from '@nestjs/common'

@EventsHandler(UserVerifiedEvent)
export class UserVerifiedHandler implements IEventHandler<UserVerifiedEvent> {
  handle(event: UserVerifiedEvent) {
    Logger.log(event, 'UserVerifiedEvent')
  }
}
