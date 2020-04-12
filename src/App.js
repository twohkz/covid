import React from 'react';

import Dashboard from './scenes/Dashboard';
import Header from './scenes/Header';
import Wrapper from './scenes/Wrapper';

import { useTheme } from './contexts/ThemeContext';

import './App.css';

function App() {
  const themeState = useTheme();

  return (
    <Wrapper themeState={themeState}>
      <div>
        <Header />
        <Dashboard />
      </div>
    </Wrapper>
    
  );
}

export default App;
