import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param
} from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { ExpensesService } from './expenses.service';
import { Expense } from './interfaces/expense.interface';

@Controller('expenses')
export class ExpensesController {
  constructor(private expenseService: ExpensesService) {}
  @Get()
  getAllExpenses(): Expense[] {
    return this.expenseService.getAllExpenses();
  }

  @Get(':id')
  getExpenseById(@Param('id') id): Expense {
    return this.expenseService.getExpenseById(id);
  }

  @Post()
  createNewExpense(@Body() createExpenseDto: CreateExpenseDto): string {
    return `
    Name: ${createExpenseDto.expense}
    Cost: ${createExpenseDto.cost}
    ImageUrl: ${createExpenseDto.imageUrl}  `;
  }

  @Put(':id')
  updateExpense(
    @Body() createExpenseDto: CreateExpenseDto,
    @Param('id') id
  ): string {
    return `Update expense ${id} with body  Name: ${createExpenseDto.expense} `;
  }

  @Delete(':id')
  deleteExpense(@Param('id') id): string {
    return `Delete  ${id}`;
  }
}
