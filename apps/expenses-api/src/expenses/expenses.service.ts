import { Injectable } from '@nestjs/common';
import { Expense } from './interfaces/expense.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ExpensesService {
  private readonly _expenses = new BehaviorSubject<Expense[]>([
    { id: '123123123', expense: 'expense 1', cost: 111, imageUrl: 'an url' },
    {
      id: '123123aasd123',
      expense: 'expense 2',
      cost: 123123,
      imageUrl: 'an url'
    }
  ]);

  expenses$ = this._expenses.asObservable();

  get expenses() {
    return this._expenses.getValue();
  }

  set expenses(val: Expense[]) {
    this._expenses.next(val);
  }

  getExpenseById(id: string): Expense {
    return this.expenses.find(expense => expense.id === id);
  }

  addExpense(body: Expense) {
    const newExpense = {
      ...body,
      id: Math.random()
        .toString(36)
        .substr(2, 9)
    };

    this.expenses = [...this.expenses, newExpense];

    return newExpense;
  }

  deleteExpenseById(id: string) {
    this.expenses = this.expenses.filter(expense => expense.id !== id);

    return `expense with id:${id} was deleted`;
  }

  updateExpenseById(id: string, body: Expense) {
    let expense = this.expenses.find(expense => expense.id === id);

    if (expense) {
      const index = this.expenses.indexOf(expense);
      this.expenses[index] = {
        ...expense,
        ...body
      };
      this.expenses = [...this.expenses];
    }

    return `expense with id:${id} was updated`;
  }
}
