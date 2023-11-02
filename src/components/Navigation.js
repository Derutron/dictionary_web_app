import React, { useContext, useState } from 'react';
import BookIcon from '../icons/book.svg';
import '../css/Navigation.css';
import GroupIcon from '../icons/Group.svg';
import PathIcon from '../icons/Path 3.svg';
import { ThemeContext } from '../components/ThemeContext';
import GroupdarkIcon from '../icons/Group icon dark.svg';
import BookDarkIcon from '../icons/book dark.svg';

const fontStyles = ['serif', 'sans-serif', 'monospace'];

const Navigation = (props) => {
  const { onFontChange } = props;
  const { darkTheme, themeHandler } = useContext(ThemeContext);

  const [selectedFontStyle, setSelectedFontStyle] = useState('serif');
  const [showFontList, setShowFontList] = useState(false);

  const handleFontClick = () => {
    setShowFontList(!showFontList);
  };

  const handleFontSelect = (fontStyle) => {
    setSelectedFontStyle(fontStyle);
    onFontChange(fontStyle);
    setShowFontList(false);
  };

  return (
    <div className="group10">
      {!darkTheme ? (
        <img className="book-icon" src={BookIcon} alt="Book Icon" />
      ) : (
        <img className="book-dark-icon" src={BookDarkIcon} alt="Book Dark Icon" />
      )}

      <div className="group13">
        <p className={darkTheme ? 'text16' : 'text'}>
          <div className="font-selector">
            <h3 className="font-label" onClick={handleFontClick}>
              <span className="selected-font">{selectedFontStyle}</span>
              <img className={`arrow-icon ${showFontList ? 'rotate-90' : ''}`} src={PathIcon} alt="Path Icon" />
            </h3>
            {showFontList && (
              <ul className="font-list">
                {fontStyles.map((fontStyle, index) => (
                  <li
                    key={index}
                    className={`font-option ${fontStyle === selectedFontStyle ? 'selected' : ''}`}
                    onClick={() => handleFontSelect(fontStyle)}
                  >
                    {fontStyle}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </p>
      </div>

      {!darkTheme ? (
        <img
          className="group-icon"
          onClick={themeHandler}
          src={GroupIcon}
          alt="Group Icon"
        />
      ) : (
        <img
          className="group-icon-dark"
          onClick={themeHandler}
          src={GroupdarkIcon}
          alt="Group Icon"
        />
      )}
    </div>
  );
};

export default Navigation;