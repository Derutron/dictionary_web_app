import React, {useContext} from 'react';
import BookIcon from '../icons/book.svg'; 
import '../css/Navigation.css';
import GroupIcon from '../icons/Group.svg';
import PathIcon from '../icons/Path 3.svg';
import { ThemeContext } from './ContextTheme';
import GroupdarkIcon from '../icons/Group icon dark.svg'
import BookDarkIcon from '../icons/book dark.svg'


const Navigation = () => {
  const {darkTheme,themeHandler} = useContext(ThemeContext)
  return (
    
        <div className='group10'>
          
            {!darkTheme ? <img className='book-icon'
            src={BookIcon} alt="Book Icon" /> : <img className='book-dark-icon'
            src={BookDarkIcon} alt="Book Dark Icon" />}
          
            <div className='group13'>

              {!darkTheme ? <p className='text'>San Serif</p> : <p className='text16'>San Serif</p>}
                <img className='path-icon'
                src={PathIcon} alt="Path Icon" />
           
          </div>
            {
          !darkTheme ? <img className='group-icon' onClick={themeHandler}
          src={GroupIcon} alt="Group Icon"/> : <img className='group-icon-dark' onClick={themeHandler}
          src={GroupdarkIcon} alt="Group Icon"/>
            }
      </div>
 
  );
};

export default Navigation;




