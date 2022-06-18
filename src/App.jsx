import './App.css';
import { Navbar } from './components';
import { Header } from './containers';

const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <div className='gradient__bg'>
        <Header />
      </div>
      <h1>...More Coming Soon...</h1>
    </div>
  );
}

export default App;
