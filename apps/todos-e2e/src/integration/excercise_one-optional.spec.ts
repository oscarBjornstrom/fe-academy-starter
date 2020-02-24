import { addTodoItem, getTodos } from '../support/app.po';

describe('TodoApp 1 optional excercise ', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should set the background of the items', () => {
    addTodoItem('some task', 'some desc');
    addTodoItem('another task', 'another description');
    getTodos().should(t => expect(t.length).equal(2));
    getTodos()
      .first()
      .should('have.css', 'backgroundColor', 'rgb(173, 216, 230)');
  });
});
