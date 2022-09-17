import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import theme from './theme';
import Nav from './components/Nav';
import FreeConsult from './components/FreeConsult';
import About from './components/About';
import Skills from './components/Skills';
import Slider from './components/Slider';

const Global = createGlobalStyle`
  body {
    background-color: ${theme.white};
  }
`
const Container = styled.div`
  margin-left: 4%;
  margin-right: 4%;
`
const BookContainer = styled.div`
  background-color: ${theme.black};
  color: white;
  border-radius: 15px;
  margin-top: 64px;
  margin-bottom: 32px;
  padding-top: 48px;
  padding-bottom: 48px;
  h2 {
    font-size: 32px;
  }
  p {
    font-size: 18px;
  }
`
const Intro = styled.div`
  p {
    color: ${theme.brown};
    line-height: 28px;
    margin-bottom: 32px;
  }
`
function App() {
  return (
    <Container className="App">
      <Global />
      <div>
        <Nav />
        <Intro>
          <h1>Design solutions made easy</h1>
          <p>With over ten years of experience in various design disciplines, 
            I'm your one-stop shop for your design needs.
          </p>
        </Intro>
      </div>
      <Skills />
      <About />

      <div>
        <h2>My Work</h2>
        <Slider/>
      </div>

      <BookContainer>
        <h2>Book a call with me</h2>
        <p>I'd love to have a chat to see how I can help you. 
          The best first step is for us to discuss your project during a free consultation. 
          Then we can move forward from there.
        </p>
        <FreeConsult color={theme.red} hoverColor={theme.orange}/>
      </BookContainer>
      <Nav />
    </Container>
  );
}

export default App;
