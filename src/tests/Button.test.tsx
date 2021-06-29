import { mount } from '@cypress/react';
import {SubmitButton} from '../component/Button/SubmitButton';

it('renders learn react link', () => {
  mount(<SubmitButton text={'Log In'}/>);
  cy.contains('Log In').should('exist')
  mount(<SubmitButton text={'Register'}/>);
  cy.contains('Register').should('exist')
});