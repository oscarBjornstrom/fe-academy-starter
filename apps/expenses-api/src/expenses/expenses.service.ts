import { Injectable } from '@nestjs/common';
import { Expense } from './interfaces/expense.interface';

@Injectable()
export class ExpensesService {
  private readonly expenses: Expense[] = [
    { id: '123123123', expense: 'expense 1', cost: 111, imageUrl: 'an url' },
    { id: '123123aasd123', expense: 'expense 2', cost: 123123, imageUrl: 'an url' }
  ];

  getAllExpenses(): Expense[] {
    return this.expenses;
  }

  getExpenseById(id: string): Expense {
    return this.expenses.find(expense => expense.id === id);
  }
}
