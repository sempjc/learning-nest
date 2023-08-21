import { ApiProperty } from '@nestjs/swagger';
import { TodoStatus } from '../../Services/Todo/types/TodoStatus';

export class TodoDto {
  @ApiProperty() status: TodoStatus;
  @ApiProperty() title: string;
  @ApiProperty() description: string;
  @ApiProperty() createdAt: Date;
  @ApiProperty() updatedAt: Date;
}
