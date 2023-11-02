import React, { useContext, useRef } from 'react';
import { ThemeContext } from './ThemeContext';
import Group4Icon from '../icons/Group 4.svg';
import '../css/Card.css'


    export const Banner = ({ audioUrl, word, phonetic }) => {
      const { darkTheme } = useContext(ThemeContext);
      const ref = useRef();
  
      const playAudio = () => {
      ref.current.play(); 
  };
  return (
   
    <div className='group15'>
      <div className='group18'>
        {!darkTheme ?  <p className='text1'>{word}</p> : <p className='text17'>{word}</p>}
        <p className='text2'>/{phonetic}/</p>
      </div>

      <button onClick={playAudio}>
        <img className='group4-Icon'
        src={Group4Icon} alt="Group4 Icon" />
      </button>
        <audio className='hidden' ref={ref} src={audioUrl} />
    </div>
  )
}

export default Banner






