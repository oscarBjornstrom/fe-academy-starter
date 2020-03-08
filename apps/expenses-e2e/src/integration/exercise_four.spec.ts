import {
  getExpenseInput,
  addAdvancedExpense,
  getRouterLink,
  getEditButton,
  getSpecificExpense
} from '../support/app.po';

describe('Exercise 4', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should set validity of the form', () => {
    cy.visit('add-expense');
    getExpenseInput()
      .type(
        'this is a string that has more than 50 characters and should be invalid'
      )
      .should('have.class', 'ng-invalid');
  });

  it('should update an expense', () => {
    cy.visit('add-expense');
    addAdvancedExpense('name', 123, 'an url');
    getRouterLink('Expenses').click();
    getSpecificExpense('name');
    getEditButton().click();

    addAdvancedExpense('edited', 1234123, 'edited url');
    getSpecificExpense('edited');
  });
});
