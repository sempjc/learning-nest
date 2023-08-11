import {
  Body,
  Controller,
  Delete,
  Post,
  Get,
  Put,
  Param,
} from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';
import { Todo } from './types/todo.td';
import { TodoService } from './todo.services';
import { randomBytes } from 'crypto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post()
  async create(@Body() todoDto: TodoDto) {
    const todo: Todo = {
      id: randomBytes(16).toString('hex'),
      ...todoDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.todoService.create(todo);
  }

  @Get()
  async findAll(): Promise<TodoDto[]> {
    const todos = this.todoService.findAll();
    const todosDto: TodoDto[] = todos.map((todo) => ({
      ...todo,
    }));
    return todosDto;
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<TodoDto> {
    const todo = this.todoService.findById(id);
    if (!todo) throw new Error('Todo not found');
    const todoDto: TodoDto = {
      ...todo,
    };
    return todoDto;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() todoDto: TodoDto) {
    const todo: Todo = {
      id,
      ...todoDto,
      updatedAt: new Date(),
    };

    this.todoService.update(id, todo);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.todoService.delete(id);
  }

  @Delete()
  async deleteAll() {
    this.todoService.deleteAll();
  }
}
