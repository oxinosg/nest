import { AggregateRoot } from '@nestjs/cqrs'

import { UserVerifiedEvent } from '../events/impl/user-verified.event'
import { UserCreatedEvent } from '../events/impl/user-created.event'

export class User extends AggregateRoot {
  constructor(
    public readonly userId: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly emailVerified: boolean,
  ) {
    super()
  }

  verifyEmail() {
    // verify email
    if (this.emailVerified) {
      this.apply(new UserVerifiedEvent(this.userId))
    }
  }

  userCreated() {
    this.apply(
      new UserCreatedEvent({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
    )
  }
}
