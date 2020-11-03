import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('I can see the page title', () => {
    cy.get('h1').should('have.text', 'Welcome to Your Vue.js App');    
});

