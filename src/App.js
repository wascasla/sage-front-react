import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/layout/Dashboard';
import Login from './components/login/Login';


function App() {
  return (
    <div className="App">

<Router>
      
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav> */}

  {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
  <Switch>
    <Route path="/home">
      <Dashboard />
    </Route>
    <Route path="/login">
      <Login />
    </Route>          
  </Switch>

</Router>



      {/* <header className="App-header">
      <Button variant="contained" color="primary">
      Hello World
    </Button>
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
      </header> */}
    </div>
  );
}

export default App;
