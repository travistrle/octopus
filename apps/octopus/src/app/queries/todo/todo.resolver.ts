import { Query, Resolver } from '@nestjs/graphql';
import { Todo } from './todo.interface';

@Resolver('Todo')
export class TodoResolver {
  private todos: Todo[] = [
    {
      id: 1,
      task: 'Voltron',
    },
    {
      id: 2,
      task: 'Ship in a Bottle',
    },
    {
      id: 3,
      task: 'Hello 3',
    }
  ];

  @Query('todos')
  getTodos(): Todo[] {
    return this.todos;
  }
}