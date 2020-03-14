import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { GetUsersQuery } from '../impl'
import { User } from '../../graphql'

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
  async execute(query: GetUsersQuery): Promise<User[]> {
    console.log('GetHeroesQuery')
    return await []
  }
}
