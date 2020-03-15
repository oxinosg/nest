import { UserCreatedHandler } from './user-created.handler'
import { UserVerifiedHandler } from './user-verified.handler'
import { UserWelcomedHandler } from './user-welcomed.handler'

export const EventHandlers = [
  UserCreatedHandler,
  UserVerifiedHandler,
  UserWelcomedHandler,
]
