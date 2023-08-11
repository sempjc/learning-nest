import { Module } from '@nestjs/common';
import { TodoModule } from './Todo/todo.module';

@Module({
  imports: [TodoModule],
})
export class AppModule {}
