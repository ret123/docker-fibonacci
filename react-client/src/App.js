import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Fib from './Fib'

function App() {
  return (
    <BrowserRouter>
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
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/about" component={About} />
        </div>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
