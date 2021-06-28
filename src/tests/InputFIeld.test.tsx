import { mount } from '@cypress/react';
import {InputField} from '../component/InputField/InputField';

it('renders learn react link', () => {
  mount(<InputField placeHolder={'Username'}/>);
  cy.get('[placeholder="Username"]').should('exist')
  mount(<InputField placeHolder={'Email'}/>);
  cy.get('[placeholder="Email"]').should('exist')
});