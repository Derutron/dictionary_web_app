import React from 'react';
import BookIcon from '../icons/book.svg'; 
import '../css/Navigation.css';
import GroupIcon from '../icons/Group.svg';
import PathIcon from '../icons/Path 3.svg';

const Navigation = () => {
  return (
    <div className='main'>
        <div className='container'>
          <img className='book-icon'
          src={BookIcon} alt="Book Icon" />

        
          <div className='group'>
            <div className='font'>
             <p className='text'>San Serif</p>

              <img className='path-icon'
              src={PathIcon} alt="Path Icon" />
            </div>

            <img className='group-icon'
            src={GroupIcon} alt="Group Icon"/>
          </div>
      </div>
    </div>
  );
};

export default Navigation;
