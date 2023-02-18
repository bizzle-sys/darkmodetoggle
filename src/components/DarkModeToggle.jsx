import React, { useState } from 'react';

export const  DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isDarkMode ? 'Light mode' : 'Dark mode'}
      </button>
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>Hello</h1>

s      </div>
    </div>
  );
}

