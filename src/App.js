import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ButtonNeon from './components/Button/Neon/ButtonNeon';
import ButtonNeu from './components/Button/Neumorphism/ButtonNeu';

function App() {
  return (
    <>
      <Navbar />
      <ButtonNeon />
      <ButtonNeu />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>  
  );
}

export default App;
