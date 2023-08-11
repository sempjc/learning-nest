import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.services';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
