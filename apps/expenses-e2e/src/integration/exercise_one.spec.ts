import {
  getGreeting,
  getNoItemsText,
  getExpenseInput,
  getCostInput,
  getAddExpenseButton,
  getExpenses
} from '../support/app.po';

describe('ExpenseApp exercise 1', () => {
  beforeEach(() => cy.visit('/'));

  it('should display a title', () => {
    getGreeting();
  });

  it('should display a text if no expenses', () => {
    getNoItemsText();
  });

  it('should add a new todo to the list', () => {
    getExpenseInput().type('Coffe');
    getCostInput().type('900');
    getAddExpenseButton().click();
    getExpenses().should(t => expect(t.length).equal(1));
    getExpenses()
      .last()
      .should('have.text', 'Coffe');

    getExpenseInput().should('be.empty');
    getCostInput().should('be.empty');
  });
});
