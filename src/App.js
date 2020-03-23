import React from 'react';
import {AppContextProvider} from "./context/AppContext";
import Users from "./components/Users";

import './App.css';

function App() {
  return (
    <AppContextProvider>
      <Users />
    </AppContextProvider>
  );
}

export default App;
