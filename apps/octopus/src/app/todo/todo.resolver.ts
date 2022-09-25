import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { TodoArgs } from './dto/todo.args';
import { Todo } from './models/todo.model';
import { TodoService } from './todo.service';

const pubSub = new PubSub();

@Resolver(of => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(returns => [Todo])
  todos(@Context() context: any): Promise<Todo[]> {
    const { req, res } = context
    return this.todoService.findAll(req.headers['authorization']);
  }
}