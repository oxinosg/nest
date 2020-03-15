import { Args, Resolver, Query, Mutation } from '@nestjs/graphql'
import { plainToClass } from 'class-transformer'
import { CommandBus, QueryBus } from '@nestjs/cqrs'

import { GetUsersQuery } from '../queries/impl'
import { CreateUserCommand } from '../commands/impl'
import { CreateUserInput } from '../types/user.type'
import { User } from '../../graphql'

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Query('list')
  async list() {
    const user = await this.queryBus.execute(new GetUsersQuery())
    return plainToClass(User, user)
  }

  @Mutation()
  async createUser(@Args('createUserInput') input: CreateUserInput) {
    const res = await this.commandBus.execute(new CreateUserCommand(input))
    return res
  }
}
