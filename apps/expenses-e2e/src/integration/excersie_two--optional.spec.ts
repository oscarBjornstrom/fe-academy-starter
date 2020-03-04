import { getRouterLink, getNoItemsText, login } from "../support/app.po";

describe('Exercise 2 Optional', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should prevent navigation to expenses unless user has logged in', () => {
      getRouterLink('Expenses').click()
      getNoItemsText().should('be.empty');
  });

  it('should allow navigating to the Expenses feature when user has logged in', () => {
      getRouterLink('Login').click();
      login('anyUser', 'password')
      getRouterLink('Expenses').click();
      getNoItemsText()
  })
});
