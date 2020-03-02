export const getGreeting = () => cy.get('h1');
export const getExpenses = () => cy.get('li.expense-item');
export const getSummary = () => cy.get('#expense-summary');
export const getAddExpenseButton = () => cy.get('button#add-expense-button');
export const getExpenseInput = () => cy.get('input#expense-input');
export const getCostInput = () => cy.get('input#cost-input');
export const getExpenseDateInput = () => cy.get('input#date-input');
export const getExpenseImageInput = () => cy.get('input#image-url-input');
export const getNoItemsText = () => cy.get('p.no-expenses-text');
export const getRouterLinks = () => cy.get('a.router-link');
export const getRouterLink = text => cy.get('a.router-link').contains(text);
export const getNotFoundButton = () => cy.get('button#not-found-button');
export const getEditButton = () => cy.get('button.edit-button');
export const getShowMoreButton = () => cy.get('button.show-more');
export const getBackButton = () => cy.get('button.back-button');
export const addExpenseItem = (expenseName, cost) => {
  getExpenseInput().type(expenseName);
  getCostInput().type(cost);
  getAddExpenseButton().click();
};

export const addAdvancedExpense = (expenseName, cost, url) => {
  getExpenseInput().type(expenseName);
  getCostInput().type(cost);
  getExpenseImageInput().type(url);
  getAddExpenseButton().click();
};
