import { Injectable, Logger } from '@nestjs/common'
import { ICommand, ofType, Saga } from '@nestjs/cqrs'
import { Observable } from 'rxjs'
import { delay, map } from 'rxjs/operators'

import { UserCreatedEvent } from '../events/impl/user-created.event'
import { WelcomeUserCommand } from '../commands/impl/welcome-user.command'

@Injectable()
export class UsersSagas {
  @Saga()
  userCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserCreatedEvent),
      delay(5000),
      map(event => {
        Logger.log('UsersSagas', 'UsersSagas')
        const userId = event.user.userId
        return new WelcomeUserCommand(userId)
      }),
    )
  }
}
