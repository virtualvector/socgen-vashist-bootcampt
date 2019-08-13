import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Welcome from './Welcome'
import Dropdown from './components/Dropdown'
import NameForm from './components/NameForm'
import NameFormControlled from './components/NameFormControlled'

function App() {
  return (
    <div className="App">
       <NameForm></NameForm>
       <NameFormControlled></NameFormControlled>
      <Dropdown></Dropdown>
    
      

    </div>

  );
}

export default App;
