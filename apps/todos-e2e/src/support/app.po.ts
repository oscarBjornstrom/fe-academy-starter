export const getGreeting = () => cy.get('h1');
export const getTodos = () => cy.get('li.todo-item');
export const getAddTodoButton = () => cy.get('button#add-todo-button');
export const getTaskInput = () => cy.get('input#todo-task-input');
export const getDescriptionInput = () => cy.get('input#todo-description-input');
export const getNoItemsText = () => cy.get('p.no-todos-text');


export const addItem = (taskName, description) => {
    getTaskInput().type(taskName);
    getDescriptionInput().type(description);
    getAddTodoButton().click();
}