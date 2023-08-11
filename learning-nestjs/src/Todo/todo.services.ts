import { Injectable } from '@nestjs/common';
import { Todo } from './types/todo.td';

@Injectable()
export class TodoService {
  private readonly todos: Todo[] = [];

  create(todo: Todo) {
    this.todos.push(todo);
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findById(id: string): Todo {
    return this.todos.find((todo) => todo.id === id);
  }

  update(id: string, todo: Todo): void {
    const index = this.todos.findIndex((todo) => todo.id === id);
    this.todos[index] = todo;
  }

  delete(id: string): void {
    const index = this.todos.findIndex((todo) => todo.id === id);
    this.todos.splice(index, 1);
  }

  deleteAll(): void {
    this.todos.splice(0, this.todos.length);
  }
}
