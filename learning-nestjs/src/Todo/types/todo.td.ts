import { TodoStatus } from './TodoStatus';

export type Todo = {
  id: string;
  status: TodoStatus;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};
