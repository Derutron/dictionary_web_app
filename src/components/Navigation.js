import React, {useContext} from 'react';
import BookIcon from '../icons/book.svg'; 
import '../css/Navigation.css';
import GroupIcon from '../icons/Group.svg';
import PathIcon from '../icons/Path 3.svg';
import { ThemeContext } from './ContextTheme';
import GroupdarkIcon from '../icons/Group icon dark.svg'


const Navigation = () => {
  const {darkTheme,themeHandler} = useContext(ThemeContext)
  return (
    
        <div className='group10'>
          
            <img className='book-icon'
            src={BookIcon} alt="Book Icon" />
          
            <div className='group13'>
              <p className='text'>San Serif</p>
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
