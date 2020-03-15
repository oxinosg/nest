import { CreateUserHandler } from './create-user.handler'
import { VerifyUserHandler } from './verify-user.handler'
import { WelcomeUserHandler } from './welcome-user.handler'

export const CommandHandlers = [
  CreateUserHandler,
  VerifyUserHandler,
  WelcomeUserHandler,
]
