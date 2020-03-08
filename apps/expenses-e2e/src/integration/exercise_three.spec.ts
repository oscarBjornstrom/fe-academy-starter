import {
  getRouterLink,
  addExpenseItem,
  getNoItemsText,
  getExpenses,
  getDeleteButton
} from '../support/app.po';

describe('Exercise 3', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should be able to handle deletions of items', () => {
    getRouterLink('Expenses').click();
    addExpenseItem('expense', 123);
    getExpenses().should(e => expect(t.length).equal(1));

    getNoItemsText();
    getDeleteButton().click();
  });
});
