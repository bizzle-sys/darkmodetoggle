import logo from './logo.svg';
import { useState } from 'react';
// import { Darkmode } from './components/dmode'
import { DarkModeToggle } from './components/DarkModeToggle'
import './App.css';

function App() {
  // const [theme, setTheme] = useState('light-mode')
  // const handleThemechange = (isDarkMode) => {
  //   setTheme(isDarkMode ? 'dark-mode' : 'light-mode')
  // }
  return (
    <div>
      <h1>Hello</h1>

      <DarkModeToggle />

    </div >
  );
}

export default App;
