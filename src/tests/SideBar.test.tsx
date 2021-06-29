import { mount } from '@cypress/react';
import { SideBar } from "../component/Sidebar/Sidebar"

it('renders learn react link', () => {
  mount(<SideBar />);
  cy.contains('Home')
});