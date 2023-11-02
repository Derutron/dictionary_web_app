import React, {useContext} from 'react';
import { ThemeContext } from './ThemeContext';
import TablerIcon from '../icons/tabler_external-link.svg';
import RectangleIcon from '../icons/Rectangle.svg';
import '../css/Card.css'

const BottomBar = () => {
    const { darkTheme } = useContext(ThemeContext);
  return (

        <div className='group7'>
            <img className='rectangle-Icon'
            src={RectangleIcon} alt="rectangle Icon" />
            <div className='group25'>
                <p className='text14'>Source</p>
                {!darkTheme ? <p className='text15'>https://en.wiktionary.org/wiki/keyboard</p> : 
                <p className='text15a'>https://en.wiktionary.org/wiki/keyboard</p>}
                <img className='Tabler-Icon'
                src={TablerIcon} alt="Tabler Icon" />
            </div>
        </div>
  
  )
}

export default BottomBar