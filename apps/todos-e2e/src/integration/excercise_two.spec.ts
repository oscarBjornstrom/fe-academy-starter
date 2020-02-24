import {
  getGreeting,
  getRouterLinks,
  getRouterLink,
  getNoItemsText,
  getNotFoundButton,
  addTodoItem,
  getTodos,
  getEditButton,
  getTaskInput,
  getShowMoreButton,
  getBackButton
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
    getRouterLink('Todos').click();
    getNoItemsText();
    cy.visit('asdas').contains('404');
  });

  it('should navigate from the not found to the home page', () => {
    cy.visit('asdasdqw').contains('404');

    getNotFoundButton().click();
    cy.contains('Welcome');
  });

  it('should render the add todos form in a childroute and have the same functionality as previously', () => {
    cy.visit('todos');
    cy.get('button')
      .contains('Add')
      .click();

    addTodoItem('routed todo', 'cool description');
    getTodos().should(l => expect(l.length).equal(1));
  });

  it('should open the todd-details with prefilled values and then return to the previous page', () => {
    cy.visit('todos');
    cy.get('button')
      .contains('Add')
      .click();

    addTodoItem('routed todo', 'cool description');
    getShowMoreButton().click();

    cy.contains('cool description');

    getBackButton().click();

    cy.get('button').contains('Add');
  });
});
