import styled from 'styled-components';

export const SidebarContainer = styled.div`
  background-color: white;
  height: 100%;
  border-right: 1px solid #dfdfdf;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavBar = styled.nav`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const NavBarItens = styled.ul`
  padding: 0;
  font-size: 0.9rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .nav-item {
    list-style: none;
    width: 100%;
    padding: 10px;
    color: #262626;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }

  .nav-item.btn-logout {
    color: #ca2a38;
  }

  .nav-item:hover {
    background-color: #262626;
    color: #fff;
    cursor: pointer;
  }

  hr {
    margin-top: 55vh;
  }
`;
