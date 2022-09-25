import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'todo ' })
export class Todo {
  @Field(type => Int)
  id: number;

  @Field()
  task: string;
}