import { CqrsModule } from '@nestjs/cqrs'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'

import { CommandHandlers } from './commands/handlers'
import { QueryHandlers } from './queries/handlers'
import { EventHandlers } from './events/handlers'
import { UsersSagas } from './sagas/users.sagas'
import { UserRepository } from './repository/user.repository'
import { UserResolver } from './resolvers/user.resolver'
import { UserEntity } from './entities/user.entity'

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
