import './App.css';
import { Navbar,Project,Skill } from './components';
import { Header, Nullpi, About, Projects,Skills, Footer, Contact } from './containers';

const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className='gradient__bg'>
        <Header />
      </div>
      <Nullpi />
      <About />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
