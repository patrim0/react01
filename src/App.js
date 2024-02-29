import logo from './logo.svg';
import './App.css';
/* import React from 'react';
import { render } from '@testing-library/react'; */
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <h1>Bonjour là là là</h1>
  </div>
  )
}

/* function Home() {
  return <h2>Accueil</h2>;
}

function About() {
  return <h2>À propos</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
} */

/* function App() {
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
    </div>
  );
} */

/* class Welcome extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
} */

/* class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0}
  }


  render() {
    return (
    <div>
      <p>Compteur: {this.state.count}</p>
      <button onClick={() => this.setState({count: this.state.count +1})}>
        Incrémenter
      </button>
    </div>
    );
  }
}

class Button extends React.Component {
  handleClick() {
    console.log('Le bouton a été cliqué.');
  }

  render() {
    return (
      <button onClick={this.handleClick}>Cliquez-moi</button>
    );
  }
} */
export default App;
