import { Query, Resolver } from '@nestjs/graphql';

export interface TodoEntity {
  id: number;
  task: string;
}

@Resolver('Todo')
export class TodoResolver {
  private todos: TodoEntity[] = [
    {
      id: 1,
      task: 'Voltron',
    },
    {
      id: 2,
      task: 'Ship in a Bottle',
    }
  ];

  @Query('todos')
  getTodos(): TodoEntity[] {
    return this.todos;
  }
}