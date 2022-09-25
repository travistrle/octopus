import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class TodoArgs {
  @Field(type => String)
  accessToken: string;
}