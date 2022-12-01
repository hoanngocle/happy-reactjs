import React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './App.css';
import GirlFeature from './features/Girl';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      Home Page
      <p>
        <NavLink to={'/todos'} activeClassName="active-menu">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to={'/girls'} activeClassName="active-menu">
          Girls
        </NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todo-list" component={TodoFeature} />
        <Route path="/girls" component={GirlFeature} />
      </Switch>
    </div>
  );
}

export default App;
