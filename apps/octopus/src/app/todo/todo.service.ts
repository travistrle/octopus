import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map, tap } from 'rxjs';
import { AxiosResponse } from 'axios';
import { TodoArgs } from './dto/todo.args';
import { Todo } from './models/todo.model';
// import { NewRecipeInput } from './dto/new-recipe.input';
// import { RecipesArgs } from './dto/recipes.args';
// import { Recipe } from './models/recipe.model';

@Injectable()
export class TodoService {
  constructor(private readonly httpService: HttpService) {}
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

//   async create(data: NewRecipeInput): Promise<Recipe> {
//     return {} as any;
//   }

//   async findOneById(id: string): Promise<Recipe> {
//     return {} as any;
//   }
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

  async findAll(accessToken: string): Promise<Todo[]> {
    console.log(`======> ${accessToken}`);
    const headers = {
      'Authorization': `${accessToken}`
    };
    const todoData$ = this.httpService.get('http://localhost:9999/api/todos', {headers: headers}).pipe(
      map((axiosResponse: AxiosResponse) => {
        return axiosResponse.data;
      })
    );
    return lastValueFrom(todoData$);
  }
}