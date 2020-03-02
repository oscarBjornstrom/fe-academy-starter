import { addExpenseItem, getExpenses } from '../support/app.po';

describe('ExpensesApp 1 optional excercise ', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should set the background of the items', () => {
    addExpenseItem('beer', '5');
    addExpenseItem('steak', '10');
    getExpenses().should(t => expect(t.length).equal(2));
    getExpenses()
      .first()
      .should('have.css', 'backgroundColor', 'rgb(173, 216, 230)');
  });
});
