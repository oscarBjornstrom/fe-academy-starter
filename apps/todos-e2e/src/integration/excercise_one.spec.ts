import {
  getTodos,
  getAddTodoButton,
  getGreeting,
  getTaskInput,
  getDescriptionInput,
  getNoItemsText
} from '../support/app.po';

describe('TodoApp exercise 1', () => {
  beforeEach(() => cy.visit('/'));

  it('should display a title', () => {
    getGreeting().should(h => expect(h.length).equal(1));
  });

  it('should display a text if no todos', () => {
    getNoItemsText();
  });

  it('should add a new todo to the list', () => {
    getTaskInput().type('a new task');
    getDescriptionInput().type('a new description');
    getAddTodoButton().click();
    getTodos().should(t => expect(t.length).equal(1));
    getTodos()
      .last()
      .should('have.text', 'a new task');

    getTaskInput().should('be.empty');
    getDescriptionInput().should('be.empty');
  });
});
