import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import '../css/SearchInput.css';
import SearchIcon from '../icons/search.svg';
import BottomBar from './BottomBar';
import Card from './Card';
import Banner from './Banner';
import Unavaliable from './Unavaliable';

const SearchInput = ({ selectedFontStyle, onFontChange }) => {
  const [word, setWord] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const { darkTheme } = useContext(ThemeContext);

  const searchWord = async () => {
      if (word.trim() === '') {
          setError('Oops, this field cannot be left blank... 😕');
          return;
      }
      const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
      if (response.ok) {
          const data = await response.json();
          setResults(data[0]);
          setError('');
      } else {
          setResults([]);
          setError('');
      }
  };
  const handleInputChange = (e) => {
      setWord(e.target.value);
      setError('');
  };

  const bgLight = "SearchContainer"
  const bgDark = "SearchContainer_dark"


  return (
    <div className={!darkTheme?`${bgLight}`:`${bgDark}`}>  
{darkTheme}
    

<input
  type="text"
  value={word}
  onChange={handleInputChange}
  className={`search-input ${
    darkTheme ? 'dark-theme' : ''
  } ${error ? 'error-border' : ''}`}
  placeholder={error ? '' : 'Search for any word...'}
/>

    <button class="search-button" onClick={searchWord}>
    <img src={SearchIcon} alt="SVG" />
    </button>

 <div class="error-message">
  {error}
</div>

            {results ? (
                <>
                    {results.meanings && results.meanings.length > 0 ? (
                        <Banner 
                            audioUrl={results.phonetics[0].audio}
                            word={word}
                            phonetic={results.phonetics[0].text}                           
                        />
                    ) : null}
                    {results.meanings && results.meanings.length > 0 ? (
                        results.meanings.map((content, index) => {
                            return <Card {...content} selectedFontStyle={selectedFontStyle} key={index} />;
                        })
                    ) : (
                        
                        <Unavaliable />
                    )}
                    <BottomBar />
                </>
            ) : null}
    
            </div>
  );
};

export default SearchInput;
