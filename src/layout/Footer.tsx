import React from 'react';
import styled from 'styled-components';
import Container from '../ui/Container';

const StyledFooter = styled.footer`
  background: var(--secondary-color);
  color: var(--white);
  padding: var(--spacing-xl) 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterLogo = styled.div`
  font-size: var(--font-size-xl);
  font-weight: bold;
  margin-bottom: var(--spacing-md);
  
  span {
    color: var(--primary-color);
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  margin: var(--spacing-md) 0;
  flex-wrap: wrap;
  justify-content: center;
  
  a {
    color: var(--white);
    text-decoration: none;
    transition: var(--transition);
    
    &:hover, &:focus {
      color: var(--primary-color);
    }
  }
`;

const FooterCopyright = styled.p`
  margin-top: var(--spacing-md);
  font-size: var(--font-size-sm);
  opacity: 0.8;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <FooterLogo>
            React<span>Essentials</span>
          </FooterLogo>
          <p>Uma introdução minimalista aos conceitos essenciais do React</p>
          <FooterLinks>
            <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">Documentação Oficial</a>
            <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer">Tutorial</a>
            <a href="https://reactjs.org/community/examples.html" target="_blank" rel="noopener noreferrer">Exemplos</a>
          </FooterLinks>
          <FooterCopyright>
            &copy; {new Date().getFullYear()} ReactEssentials. Criado para fins educacionais.
          </FooterCopyright>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
