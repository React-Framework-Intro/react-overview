import React from 'react';
import styled from 'styled-components';

interface AccessibilityControlsProps {
  toggleHighContrast: () => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  isHighContrast: boolean;
}

const ControlsContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--white);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-sm);
  display: flex;
  gap: var(--spacing-xs);
  box-shadow: var(--shadow-md);
  z-index: 999;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ControlButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: var(--primary-color);
  color: var(--secondary-color);
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover, &:focus {
    background: var(--primary-dark);
  }
`;

const ContrastButton = styled(ControlButton)<{ isActive: boolean }>`
  background: ${props => props.isActive ? 'var(--secondary-color)' : 'var(--primary-color)'};
  color: ${props => props.isActive ? 'var(--white)' : 'var(--secondary-color)'};
`;

const AccessibilityControls: React.FC<AccessibilityControlsProps> = ({
  toggleHighContrast,
  increaseFontSize,
  decreaseFontSize,
  resetFontSize,
  isHighContrast
}) => {
  return (
    <ControlsContainer aria-label="Controles de acessibilidade">
      <ControlButton 
        onClick={decreaseFontSize} 
        aria-label="Diminuir tamanho da fonte"
        title="Diminuir tamanho da fonte"
      >
        A-
      </ControlButton>
      <ControlButton 
        onClick={resetFontSize} 
        aria-label="Resetar tamanho da fonte"
        title="Resetar tamanho da fonte"
      >
        A
      </ControlButton>
      <ControlButton 
        onClick={increaseFontSize} 
        aria-label="Aumentar tamanho da fonte"
        title="Aumentar tamanho da fonte"
      >
        A+
      </ControlButton>
      <ContrastButton 
        onClick={toggleHighContrast} 
        aria-label="Alternar modo de alto contraste"
        title="Alternar modo de alto contraste"
        isActive={isHighContrast}
      >
        <span role="img" aria-hidden="true">👁️</span>
      </ContrastButton>
    </ControlsContainer>
  );
};

export default AccessibilityControls;
