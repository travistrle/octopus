import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoResolver } from './todo.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      typePaths: ['./**/*.graphql']
    })
  ],
  controllers: [AppController],
  providers: [AppService, TodoResolver],
})
export class AppModule {}
