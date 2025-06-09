import React from 'react';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeExampleProps {
  code: string;
  language?: string;
  title?: string;
  description?: string;
}

const CodeContainer = styled.div`
  margin: var(--spacing-md) 0;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
`;

const CodeHeader = styled.div`
  background: var(--secondary-color);
  color: var(--white);
  padding: var(--spacing-sm);
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CodeTitle = styled.div`
  font-size: var(--font-size-md);
`;

const CodeDescription = styled.p`
  margin: var(--spacing-sm) 0;
  color: var(--text-light);
  font-size: var(--font-size-md);
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  margin: 0 !important;
  border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
  font-size: var(--font-size-sm) !important;
  
  @media (max-width: 768px) {
    font-size: 0.75rem !important;
  }
`;

const CodeExample: React.FC<CodeExampleProps> = ({ 
  code, 
  language = 'jsx', 
  title = 'Exemplo de Código', 
  description 
}) => {
  return (
    <div>
      {description && <CodeDescription>{description}</CodeDescription>}
      <CodeContainer>
        <CodeHeader>
          <CodeTitle>{title}</CodeTitle>
        </CodeHeader>
        <StyledSyntaxHighlighter 
          language={language} 
          style={vscDarkPlus}
          wrapLines={true}
          showLineNumbers={true}
        >
          {code}
        </StyledSyntaxHighlighter>
      </CodeContainer>
    </div>
  );
};

export default CodeExample;
