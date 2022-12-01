import React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './App.css';
import ColorBox from './components/ColorBox';
import Counter from './components/ColorBox';
import GirlFeature from './features/Girl';
import TodoFeature from './features/Todo';

function App() {
  const name = 'Emilia';
  const age = 28;
  const isMale = true;
  const student = {
    name: 'Hayd'
  };

  const colorList = ['red', 'blue', 'green'];

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name}!
        </p>
        <p>Xin chao {name} - {age} - {isMale ? 'Male': 'Female'}</p>
        {isMale ? <p>Male</p> : <p>Female</p>}

        {isMale && (
          <React.Fragment>
          <p>Male</p>
          <p>Male</p>
          <p>Male</p>
          </React.Fragment>
        )}


        {isMale && (
          <>
          <p>Male</p>
          <p>Male</p>
          <p>Male</p>
          </>
        )}

        <p>{student.name}      </p>

        <p>{colorList}</p>
        <ul>
          {colorList.map(color => (
            <li style={{ color }}>{color}</li>
          ))}
        </ul>
      </header> */}
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
        {/* <Redirect from="/home" to="/" /> */}
        <Redirect from="/home" to="/" />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/girls" component={GirlFeature} />
      </Switch>
      {/* <ColorBox/> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
