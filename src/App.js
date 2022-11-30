import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
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
    name: "Hayd"
  };

  const colorList = [
    'red',
    'blue',
    'green'
  ];

  return (
    <div className="App">
      Home Page

      <p><NavLink to="todos">Nav Todos</NavLink></p>
      <p><NavLink to="girls">Nav Girls</NavLink></p>

      <Routes>
        <Route path='/' element={<TodoFeature/>}/>
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/girls" element={<GirlFeature />} />
      </Routes>
      {/* <ColorBox/> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
