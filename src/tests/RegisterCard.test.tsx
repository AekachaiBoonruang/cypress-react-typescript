import { mount } from '@cypress/react';
import {RegisterCard} from '../component/Register/RegisterForm';

it('renders learn react link', () => {
  mount(<RegisterCard />);
  cy.get('h1').contains('Register')
  cy.get('[placeholder="Username"]').should('exist')
  cy.get('[placeholder="E-mail"]').should('exist')
  cy.get('[placeholder="Password"]').should('exist')
  cy.get('small').contains('Or sign up with Facebook')
  cy.get('button').contains('Register')
  cy.get('a').contains('I already have an account')
});