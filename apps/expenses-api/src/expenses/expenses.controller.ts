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
    return this.expenseService.expenses;
  }

  @Get(':id')
  getExpenseById(@Param('id') id: string): Expense {
    return this.expenseService.getExpenseById(id);
  }

  @Post()
  createNewExpense(@Body() createExpenseDto: CreateExpenseDto): Expense {
    return this.expenseService.addExpense(createExpenseDto);
  }

  @Put(':id')
  updateExpense(
    @Body() createExpenseDto: CreateExpenseDto,
    @Param('id') id: string
  ): string {
    return this.expenseService.updateExpenseById(id, createExpenseDto);
  }

  @Delete(':id')
  deleteExpense(@Param('id') id): string {
    return this.expenseService.deleteExpenseById(id);
  }
}
