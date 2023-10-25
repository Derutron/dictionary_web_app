// import {useContext} from 'react';
// import Navigation from './components/Navigation';
// import './App.css'
// import SearchInput from './components/SearchInput';
// import Card from './components/Card';
// import { ThemeContext } from './components/ContextTheme';



// function App() {
//   const {darkTheme} = useContext(ThemeContext)

//   const bgLight = "App"
//   const bgDark = "App dark"
//   return (
   
//     <div className={!darkTheme?`${bgLight}`:`${bgDark}`}>
//         <Navigation />
//         <SearchInput />
//         <Card/>
//     </div>
//   );
// }

// export default App;





import React, { useContext, useState } from 'react';
import Navigation from './components/Navigation';
import './App.css';
import SearchInput from './components/SearchInput';
import Card from './components/Card';
import { ThemeContext } from './components/ContextTheme';

function App() {
  const { darkTheme } = useContext(ThemeContext);
  const [searchedWord, setSearchedWord] = useState('');
  const [definition, setDefinition] = useState('');

  const bgLight = 'App';
  const bgDark = 'App dark';

  const handleSearch = (word) => {
    // Make an API request to get the definition
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const meanings = data[0].meanings
            .map((meaning) => meaning.definition)
            .join('\n');
          setDefinition(meanings);
        } else {
          setDefinition('Word not found.');
        }
      })
      .catch((error) => {
        console.error(error);
        setDefinition('An error occurred.');
      });

    setSearchedWord(word);
  };

  return (
    <div className={!darkTheme ? `${bgLight}` : `${bgDark}`}>
      <Navigation />
      <SearchInput onSearch={handleSearch} />
      <Card searchedWord={searchedWord} definition={definition} />
    </div>
  );
}

export default App;








