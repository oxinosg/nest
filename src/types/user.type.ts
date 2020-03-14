import { MinLength, MaxLength } from 'class-validator'
import { User } from '../graphql'

export class CreateUserInput extends User {
  @MinLength(3)
  @MaxLength(20)
  firstName?: string

  @MinLength(3)
  @MaxLength(20)
  lastName?: string
}
