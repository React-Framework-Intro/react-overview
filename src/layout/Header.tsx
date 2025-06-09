import React from 'react';
import styled from 'styled-components';
import Container from '../ui/Container';

const StyledHeader = styled.header`
  background: var(--white);
  box-shadow: var(--shadow-sm);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: var(--spacing-sm) 0;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-xl);
  font-weight: bold;
  color: var(--secondary-color);
  
  span {
    color: var(--primary-color);
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: var(--spacing-md);
  list-style: none;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    transition: var(--transition);
    
    &:hover, &:focus {
      color: var(--primary-color);
    }
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderContent>
          <Logo>
            React<span>Essentials</span>
          </Logo>
          <Nav aria-label="Navegação principal">
            <NavList>
              <NavItem>
                <a href="#intro">Introdução</a>
              </NavItem>
              <NavItem>
                <a href="#components">Componentes</a>
              </NavItem>
              <NavItem>
                <a href="#state">Estado</a>
              </NavItem>
              <NavItem>
                <a href="#hooks">Hooks</a>
              </NavItem>
              <NavItem>
                <a href="#examples">Exemplos</a>
              </NavItem>
            </NavList>
          </Nav>
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
};

export default Header;
