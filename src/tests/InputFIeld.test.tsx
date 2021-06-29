import { mount } from '@cypress/react';
import {InputField} from '../component/InputField/InputField';

it('renders learn react link', () => {
  mount(<InputField placeHolder={'Username'} type={'text'} />);
  cy.get('[placeholder="Username"]').should('exist')
  mount(<InputField placeHolder={'Email'} type={'text'}/>);
  cy.get('[placeholder="Email"]').should('exist')
});