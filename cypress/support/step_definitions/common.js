import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps';
import { getPath } from '../paths'

When('I visit {string} page', (page) => {
    cy.visit(getPath(page));
});