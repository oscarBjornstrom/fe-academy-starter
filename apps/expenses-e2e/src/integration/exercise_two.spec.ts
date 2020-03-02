import {
  getGreeting,
  getRouterLinks,
  getRouterLink,
  getNoItemsText,
  getNotFoundButton,
  getShowMoreButton,
  getBackButton,
  addExpenseItem,
  getExpenses,
  addAdvancedExpense
} from '../support/app.po';

describe('Excercise two', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should render the home screen', () => {
    getGreeting();
    getRouterLinks().should(l => expect(l.length).equal(3));
  });

  it('should navigate to the different views', () => {
    getRouterLink('Login').click();
    cy.contains('auth');
    getRouterLink('Expenses').click();
    getNoItemsText();
    cy.visit('asdas').contains('404');
  });

  it('should navigate from the not found to the home page', () => {
    cy.visit('asdasdqw').contains('404');

    getNotFoundButton().click();
    cy.contains('Welcome');
  });

  it('should render the add expense form in a childroute and have the same functionality as previously', () => {
    cy.visit('expenses');
    cy.get('button')
      .contains('Add')
      .click();

    addExpenseItem('expense', '10');
    getExpenses().should(l => expect(l.length).equal(1));
  });

  it('should open the expense-details with prefilled values and then return to the previous page', () => {
    cy.visit('expenses');
    cy.get('button')
      .contains('Add')
      .click();
    addAdvancedExpense(
      'Coffe',
      5,
      'https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874_960_720.jpg'
    );

    getShowMoreButton().click();

    cy.get('img');

    getBackButton().click();

    cy.get('button').contains('Add');
  });
});
