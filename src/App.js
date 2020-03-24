import React from 'react';
import {AppContextProvider} from "./context/AppContext";
import Users from "./components/Users";
//import Albums from "./components/Albums";

import './App.css';

function App() {
  return (
    <AppContextProvider>
      <h1 className="m-2"> Users </h1>
      <Users />
      <h1> Albums </h1>
      
    </AppContextProvider>
  );
}

export default App;
