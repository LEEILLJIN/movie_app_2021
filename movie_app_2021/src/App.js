import logo from './logo.svg';
import './App.css';

function Food({fav}){
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
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
      <Food fav = "kimchi"/>
      <Food fav = "ramen"/>
      <Food fav = "pizza"/>
      <Food fav = "taco"/>
    </div>
  );
}

export default App;
