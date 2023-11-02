import React, { useContext, useState } from 'react';
import Navigation from './components/Navigation';
import './App.css'
import SearchInput from './components/SearchInput';
// import Card from './components/Card';
import { ThemeContext } from './components/ThemeContext';



function App() {

  const [fontStyles] = useState(['serif', 'sans-serif', 'monospace']);
  const [selectedFontStyle, setSelectedFontStyle] = useState(fontStyles[0]);
  
  const handleFontChange = (fontStyle) => {
    setSelectedFontStyle(fontStyle);
};

  const {darkTheme} = useContext(ThemeContext)

  const bgLight = "App"
  const bgDark = "App dark"
  return (
   
    <div className={!darkTheme?`${bgLight}`:`${bgDark}`}>
        <Navigation onFontChange={handleFontChange} />
        <SearchInput selectedFontStyle={selectedFontStyle} onFontChange={setSelectedFontStyle} />
        {/* <Card/> */}
    </div>
  );
}

export default App;

