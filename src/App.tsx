import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import Footer from './components/layout/Footer';
import Container from './components/ui/Container';
import ConceptCard from './components/ui/ConceptCard';
import CodeExample from './components/ui/CodeExample';
import InteractiveDemo from './components/ui/InteractiveDemo';
import AccessibilityControls from './components/ui/AccessibilityControls';

// Componente para melhorar acessibilidade - pular para o conteúdo principal
const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--primary-color);
  color: var(--secondary-color);
  padding: 8px;
  z-index: 1001;
  transition: top 0.3s;
  
  &:focus {
    top: 0;
  }
`;

const Section = styled.section`
  padding: var(--spacing-xl) 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--spacing-lg);
  color: var(--text-dark);
  
  span {
    color: var(--primary-color);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
`;

const Counter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: var(--spacing-md) 0;
`;

const CounterValue = styled.div`
  font-size: var(--font-size-2xl);
  font-weight: bold;
  margin-bottom: var(--spacing-sm);
`;

const CounterButtons = styled.div`
  display: flex;
  gap: var(--spacing-sm);
`;

const Button = styled.button`
  background: var(--primary-color);
  color: var(--secondary-color);
  border: none;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-weight: bold;
  cursor: pointer;
  
  &:hover, &:focus {
    background: var(--primary-dark);
  }
`;

function App() {
  // Estado para controlar o tamanho da fonte
  const [fontSize, setFontSize] = useState(100);
  
  // Estado para controlar o modo de alto contraste
  const [highContrast, setHighContrast] = useState(false);
  
  // Estado para o exemplo de contador
  const [count, setCount] = useState(0);
  
  // Função para aumentar o tamanho da fonte
  const increaseFontSize = () => {
    if (fontSize < 150) {
      const newSize = fontSize + 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };
  
  // Função para diminuir o tamanho da fonte
  const decreaseFontSize = () => {
    if (fontSize > 80) {
      const newSize = fontSize - 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };
  
  // Função para resetar o tamanho da fonte
  const resetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
  };
  
  // Função para alternar o modo de alto contraste
  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast');
  };

  // Exemplos de código
  const componentExample = `// Componente Funcional
function Welcome(props) {
  return <h1>Olá, {props.name}</h1>;
}

// Uso do componente
<Welcome name="Usuário" />`;

  const hooksExample = `import React, { useState, useEffect } from 'react';

function Example() {
  // Declarando uma variável de estado
  const [count, setCount] = useState(0);
  
  // Similar ao componentDidMount e componentDidUpdate
  useEffect(() => {
    document.title = \`Você clicou \${count} vezes\`;
  }, [count]);
  
  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}`;

  const contextExample = `// Criando um contexto
const ThemeContext = React.createContext('light');

// Provedor de contexto
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// Consumindo o contexto
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <Button theme={theme} />;
}`;

  return (
    <>
      <GlobalStyles />
      <SkipLink href="#components">Pular para o conteúdo principal</SkipLink>
      <Header />
      <main>
        <Hero />
        
        {/* Seção de Introdução */}
        <Section id="intro" style={{ background: '#f8f9fa' }}>
          <Container>
            <SectionTitle>O que é <span>React</span>?</SectionTitle>
            <p>React é uma biblioteca JavaScript declarativa, eficiente e flexível para construir interfaces de usuário. Ele permite compor UIs complexas a partir de pequenos e isolados pedaços de código chamados "componentes".</p>
            
            <Grid>
              <ConceptCard 
                title="Declarativo" 
                description="React torna indolor a criação de UIs interativas. Projete views simples para cada estado em sua aplicação, e o React atualizará e renderizará de forma eficiente apenas os componentes necessários quando seus dados mudarem."
                icon="🔄"
                color="#61DAFB"
              />
              <ConceptCard 
                title="Baseado em Componentes" 
                description="Crie componentes encapsulados que gerenciam seu próprio estado e então os combine para criar UIs complexas. Como a lógica do componente é escrita em JavaScript e não em templates, você pode facilmente passar dados pela sua aplicação."
                icon="🧩"
                color="#764ABC"
              />
              <ConceptCard 
                title="Aprenda uma vez, escreva em qualquer lugar" 
                description="Não fazemos suposições sobre o resto da sua stack de tecnologia, então você pode desenvolver novos recursos com React sem reescrever código existente. React também pode renderizar no servidor usando Node."
                icon="📱"
                color="#41B883"
              />
            </Grid>
          </Container>
        </Section>
        
        {/* Seção de Componentes */}
        <Section id="components">
          <Container>
            <SectionTitle>Componentes <span>React</span></SectionTitle>
            <p>Componentes permitem dividir a UI em partes independentes e reutilizáveis, e pensar em cada parte isoladamente. Conceitualmente, componentes são como funções JavaScript. Eles aceitam entradas arbitrárias (chamadas "props") e retornam elementos React que descrevem o que deve aparecer na tela.</p>
            
            <CodeExample 
              code={componentExample}
              title="Componente Funcional"
              description="Este é um exemplo de um componente funcional simples que aceita props e retorna um elemento React."
            />
            
            <Grid>
              <ConceptCard 
                title="Componentes Funcionais" 
                description="A maneira mais simples de definir um componente é escrever uma função JavaScript. Esta função é um componente React válido porque aceita um único argumento de objeto 'props' e retorna um elemento React."
                icon="⚛️"
                color="#61DAFB"
              />
              <ConceptCard 
                title="Props" 
                description="Props são entradas para componentes React. Eles são dados passados de um componente pai para um componente filho. Props são somente leitura; eles nunca devem ser modificados dentro do componente."
                icon="📦"
                color="#FD3A69"
              />
            </Grid>
          </Container>
        </Section>
        
        {/* Seção de Estado e Ciclo de Vida */}
        <Section id="state" style={{ background: '#f8f9fa' }}>
          <Container>
            <SectionTitle>Estado e <span>Ciclo de Vida</span></SectionTitle>
            <p>O estado permite que os componentes React mudem sua saída ao longo do tempo em resposta a ações do usuário, respostas de rede e qualquer outra coisa. O ciclo de vida de um componente permite executar código em momentos específicos do processo de renderização.</p>
            
            <InteractiveDemo title="Exemplo de Estado com Hooks">
              <Counter>
                <CounterValue>{count}</CounterValue>
                <CounterButtons>
                  <Button onClick={() => setCount(count - 1)}>Diminuir</Button>
                  <Button onClick={() => setCount(0)}>Resetar</Button>
                  <Button onClick={() => setCount(count + 1)}>Aumentar</Button>
                </CounterButtons>
              </Counter>
            </InteractiveDemo>
            
            <CodeExample 
              code={hooksExample}
              title="useState e useEffect Hooks"
              description="Este exemplo mostra como usar os hooks useState e useEffect para gerenciar o estado e o ciclo de vida em componentes funcionais."
            />
          </Container>
        </Section>
        
        {/* Seção de Hooks */}
        <Section id="hooks">
          <Container>
            <SectionTitle>Hooks <span>Essenciais</span></SectionTitle>
            <p>Hooks são uma adição no React 16.8 que permitem usar estado e outras características do React sem escrever uma classe. Eles permitem reutilizar lógica com estado entre componentes sem mudar sua hierarquia.</p>
            
            <Grid>
              <ConceptCard 
                title="useState" 
                description="Permite adicionar o estado React a componentes funcionais. Este hook retorna um par: o valor do estado atual e uma função que permite atualizá-lo."
                icon="🔄"
                color="#61DAFB"
              />
              <ConceptCard 
                title="useEffect" 
                description="Permite executar efeitos colaterais em componentes funcionais. É semelhante aos métodos de ciclo de vida componentDidMount, componentDidUpdate e componentWillUnmount combinados."
                icon="⚙️"
                color="#764ABC"
              />
              <ConceptCard 
                title="useContext" 
                description="Aceita um objeto de contexto e retorna o valor atual do contexto. Quando o provedor mais próximo deste contexto atualiza, este hook dispara uma nova renderização."
                icon="🌐"
                color="#41B883"
              />
            </Grid>
            
            <CodeExample 
              code={contextExample}
              title="useContext Hook"
              description="Este exemplo mostra como criar e consumir um contexto usando o hook useContext."
            />
          </Container>
        </Section>
        
        {/* Seção de Exemplos */}
        <Section id="examples" style={{ background: '#f8f9fa' }}>
          <Container>
            <SectionTitle>Ferramentas <span>Utilizadas</span></SectionTitle>
            <p>Este site demonstra várias ferramentas e conceitos essenciais do ecossistema React:</p>
            
            <Grid>
              <ConceptCard 
                title="Create React App" 
                description="Ambiente configurado para criar aplicações React. Configura seu ambiente de desenvolvimento para que você possa usar os recursos mais recentes do JavaScript, fornecendo uma boa experiência de desenvolvimento."
                icon="🚀"
                color="#09D3AC"
              />
              <ConceptCard 
                title="Styled Components" 
                description="Biblioteca que permite escrever CSS real em seu JavaScript. Isso significa que você pode usar todas as características do CSS que você usa e ama, incluindo media queries, todos os pseudo-seletores, aninhamento, etc."
                icon="💅"
                color="#DB7093"
              />
              <ConceptCard 
                title="TypeScript" 
                description="Superset tipado de JavaScript que compila para JavaScript puro. TypeScript fornece melhores ferramentas em qualquer escala, adicionando tipos estáticos opcionais, classes e módulos ao JavaScript."
                icon="📘"
                color="#3178C6"
              />
              <ConceptCard 
                title="React Hooks" 
                description="Permitem usar estado e outras características do React sem escrever uma classe. Hooks fornecem uma API mais direta para os conceitos do React que você já conhece: props, estado, contexto, refs e ciclo de vida."
                icon="🎣"
                color="#61DAFB"
              />
            </Grid>
          </Container>
        </Section>
      </main>
      <Footer />
      
      {/* Controles de acessibilidade */}
      <AccessibilityControls 
        toggleHighContrast={toggleHighContrast}
        increaseFontSize={increaseFontSize}
        decreaseFontSize={decreaseFontSize}
        resetFontSize={resetFontSize}
        isHighContrast={highContrast}
      />
    </>
  );
}

export default App;
