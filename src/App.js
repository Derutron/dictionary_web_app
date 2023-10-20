import {useContext} from 'react';
import Navigation from './components/Navigation';
import './App.css'
import SearchInput from './components/SearchInput';
import Card from './components/Card';
import { ThemeContext } from './components/ContextTheme';



function App() {
  const {darkTheme} = useContext(ThemeContext)

  const bgLight = "App"
  const bgDark = "App dark"
  return (
   
    <div className={!darkTheme?`${bgLight}`:`${bgDark}`}>
        <Navigation />
        <SearchInput />
        <Card/>
    </div>
  );
}

export default App;
