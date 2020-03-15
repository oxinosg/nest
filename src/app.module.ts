import { CqrsModule } from '@nestjs/cqrs'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'

import { CommandHandlers } from './api/commands/handlers'
import { QueryHandlers } from './api/queries/handlers'
import { EventHandlers } from './api/events/handlers'
import { UsersSagas } from './api/sagas/users.sagas'
import { UserResolver } from './api/resolvers/user.resolver'
import { UserRepository } from './infrastucture/repository/user.repository'
import { UserEntity } from './infrastucture/entities/user.entity'

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      debug: true,
      playground: true,
    }),
    CqrsModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'test',
      entities: [UserEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [
    UserRepository,
    UsersSagas,
    ...CommandHandlers,
    ...QueryHandlers,
    ...EventHandlers,
    UserResolver,
  ],
})
export class AppModule {}
