export const getGreeting = () => cy.get('h1');
export const getTodos = () => cy.get('li.todo-item');
export const getAddTodoButton = () => cy.get('button#add-todo-button');
export const getTaskInput = () => cy.get('input#todo-task-input');
export const getDescriptionInput = () => cy.get('input#todo-description-input');
export const getNoItemsText = () => cy.get('p.no-todos-text');
export const getRouterLinks = () => cy.get('a.router-link');
export const getRouterLink = text => cy.get('a.router-link').contains(text);
export const getNotFoundButton = () => cy.get('button#not-found-button');
export const getEditButton = () => cy.get('button.edit-button');
export const getShowMoreButton = () => cy.get('button.show-more');
export const getBackButton = () => cy.get('button.back-button');
export const addTodoItem = (taskName, description) => {
  getTaskInput().type(taskName);
  getDescriptionInput().type(description);
  getAddTodoButton().click();
};
