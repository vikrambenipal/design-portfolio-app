import './App.css';
import theme from './theme';
import Nav from './components/Nav';
import FreeConsult from './components/FreeConsult';
import Skills from './components/Skills';
import Slider from './components/Slider';
import profile from './assets/image-amy.webp';

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
        <h1>Design solutions made easy</h1>
        <p>With over ten years of experience in various design disciplines, 
          I'm your one-stop shop for your design needs.
        </p>
      </div>

      <div>
        <img style={{ width: '100px' }}src={profile} alt="" />
        <div>
        <h2>I'm Amy, and I'd love to work on your next project</h2>
          <p>I love working with others to create beautiful design solutions. 
            I've designed everything from brand illustrations to complete mobile apps. 
            I'm also handy with a camera!
          </p>
          <FreeConsult color={theme.red} hoverColor={theme.orange}/>
        </div>
      </div>

      <div>
        <h2>My Work</h2>
      </div>

      <div>
        <h2>Book a call with me</h2>
        <p>I'd love to have a chat to see how I can help you. 
          The best first step is for us to discuss your project during a free consultation. 
          Then we can move forward from there.
        </p>
        <FreeConsult color={theme.red} hoverColor={theme.orange}/>
      </div>
      <Nav />
    </div>
  );
}

export default App;
