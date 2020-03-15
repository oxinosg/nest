import { IEventHandler, EventsHandler } from '@nestjs/cqrs'
import { Logger } from '@nestjs/common'

import { UserVerifiedEvent } from '../impl/user-verified.event'

@EventsHandler(UserVerifiedEvent)
export class UserVerifiedHandler implements IEventHandler<UserVerifiedEvent> {
  handle(event: UserVerifiedEvent) {
    Logger.log(event, 'UserVerifiedEvent')
  }
}
