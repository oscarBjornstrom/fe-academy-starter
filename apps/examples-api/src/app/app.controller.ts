import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete
} from '@nestjs/common';

import { AppService } from './app.service';
import { Todo } from './todo.interface';
import { CreateTodoDto } from './todo.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllTodos(): Todo[] {
    return this.appService.todos;
  }

  @Get('findByFilter')
  getTypeahead() {
    return this.appService.todos;
  }

  @Get('alwaysError')
  iWillError() {
    throw new Error();
  }

  @Get('randomError')
  iWillErrorRandomly() {
    const error = Math.random() > 0.5;

    if (error) {
      throw new Error('Random error occured');
    } else {
      return 'success!';
    }
  }

  @Get(':id')
  getTodoById(@Param('id') id: string): Todo {
    return this.appService.getTodoById(id);
  }

  @Post()
  createNewTodo(@Body() createTodoDto: CreateTodoDto): Todo {
    return this.appService.addTodo(createTodoDto);
  }

  @Put(':id')
  updateTodo(
    @Body() createTodoDto: CreateTodoDto,
    @Param('id') id: string
  ): string {
    return this.appService.updateTodoById(id, createTodoDto);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id): string {
    return this.appService.deleteTodoById(id);
  }
}
