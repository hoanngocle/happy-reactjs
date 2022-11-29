import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path="/todos" element={<TodoFeature/>}/>
        <Route path="/girls" element={<GirlFeature/>}/>
      </Routes>
      {/* <ColorBox/> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
