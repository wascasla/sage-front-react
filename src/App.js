import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './components/login/Login';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ServiciosAgente from './views/lupersonal/ServiciosAgente';


function App() {

  console.log(process.env);


  return (
    <Provider store={store}>
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

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/serviciosagente">
              <ServiciosAgente />
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
    </Provider>
  );
}

export default App;
