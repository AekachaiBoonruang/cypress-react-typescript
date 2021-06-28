import { mount } from '@cypress/react';
import {LoginCard} from '../component/Login/LoginForm';

it('renders learn react link', () => {
  mount(<LoginCard />);
  cy.get('h1').contains('Log In')
  cy.get('[placeholder="E-mail"]').should('exist')
  cy.get('[placeholder="Password"]').should('exist')
  cy.get('button').contains('Log In')
});