import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const themeHandler = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
