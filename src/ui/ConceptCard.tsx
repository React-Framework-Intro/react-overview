import React from 'react';
import styled from 'styled-components';

interface ConceptCardProps {
  title: string;
  description: string;
  icon?: string;
  color?: string;
}

const StyledCard = styled.div<{ cardColor?: string }>`
  background: var(--white);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  border-top: 4px solid ${props => props.cardColor || 'var(--primary-color)'};
  
  &:hover, &:focus-within {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
`;

const CardTitle = styled.h3`
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-sm);
  color: var(--text-dark);
`;

const CardDescription = styled.p`
  color: var(--text-light);
  font-size: var(--font-size-md);
  line-height: 1.6;
`;

const ConceptCard: React.FC<ConceptCardProps> = ({ 
  title, 
  description, 
  icon = "📚", 
  color 
}) => {
  return (
    <StyledCard cardColor={color}>
      <CardIcon aria-hidden="true">{icon}</CardIcon>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </StyledCard>
  );
};

export default ConceptCard;
