import { createContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/global.scss';
import { Home } from "./pages/Home";
import { NewRoom } from './pages/NewRoom';
import { useState, useEffect } from 'react';
import { auth, firebase } from './services/firebase';
import { AuthContextProvider } from './contexts/AuthContexts';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;