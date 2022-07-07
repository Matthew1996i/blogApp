import React from 'react';

import Nav from 'react-bootstrap/Nav';

import history from '../../router/history';

import { SidebarContainer,
  NavBar,
  NavBarItens } from './styles';

export default function Sidebar() {
  function logOut() {
    localStorage.removeItem('newsLetters');
    history.push('/');
  }

  return (
    <SidebarContainer>
      <NavBar>
        <NavBarItens>
          <div>
            <Nav.Item onClick={() => history.push('/user/dashboard')}>
              Timeline
            </Nav.Item>
          </div>
          <Nav.Item onClick={() => logOut()} className="btn-logout">
            Sair
          </Nav.Item>
        </NavBarItens>
      </NavBar>
    </SidebarContainer>
  );
}
