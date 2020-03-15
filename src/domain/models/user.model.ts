import { AggregateRoot } from '@nestjs/cqrs'

import { UserVerifiedEvent } from '../../api/events/impl/user-verified.event'
import { UserCreatedEvent } from '../../api/events/impl/user-created.event'

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
    if (this.emailVerified) {
      this.apply(new UserVerifiedEvent(this.userId))
    }
  }

  userCreated() {
    // move this out of model
    // apply only domain events in the model and integration events in command handlers
    // https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/
    this.apply(
      new UserCreatedEvent({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
    )
  }
}
