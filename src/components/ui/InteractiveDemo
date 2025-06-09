import React, { useState } from 'react';
import styled from 'styled-components';

interface InteractiveDemoProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const DemoContainer = styled.div`
  background: var(--white);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  margin: var(--spacing-lg) 0;
`;

const DemoHeader = styled.div`
  background: var(--secondary-color);
  color: var(--white);
  padding: var(--spacing-sm) var(--spacing-md);
`;

const DemoTitle = styled.h3`
  font-size: var(--font-size-lg);
  margin: 0;
`;

const DemoDescription = styled.p`
  color: var(--text-light);
  font-size: var(--font-size-md);
  margin: var(--spacing-sm) 0;
`;

const DemoContent = styled.div`
  padding: var(--spacing-md);
  border: 1px solid #eee;
`;

const InteractiveDemo: React.FC<InteractiveDemoProps> = ({ 
  title, 
  description, 
  children 
}) => {
  return (
    <DemoContainer>
      <DemoHeader>
        <DemoTitle>{title}</DemoTitle>
      </DemoHeader>
      {description && <DemoDescription>{description}</DemoDescription>}
      <DemoContent>
        {children}
      </DemoContent>
    </DemoContainer>
  );
};

export default InteractiveDemo;
