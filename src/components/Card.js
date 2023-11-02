import React from 'react';
import '../css/Card.css';
import RectangleIcon from '../icons/Rectangle.svg';

const Card = ({ partOfSpeech, definitions, synonyms, verb, selectedFontStyle }) => {
    const contentStyles = {
        fontFamily: selectedFontStyle,
    };
  return (
    <div className="my-3 mx-auto responsive-container" style={contentStyles}>
      <div className="flex flex-row items-center text-lg font-bold">
        <p>{partOfSpeech}</p>
        <img className="rectangle-Icon" src={RectangleIcon} alt="rectangle Icon" />
      </div>
      <p className="section-heading">Meaning</p>
      <ul className="list-disc my-3 text-sm space-y-2 list">
        {definitions.map((def, index) => (
          <li key={index}>{def.definition}</li>
        ))}
      </ul>
      {partOfSpeech === 'noun' && synonyms.length > 0 && (
        <div className="synonyms-section">
          <p className="synonyms-heading">
            Synonyms:{' '}
            <div className="synonyms-container">
  {synonyms.map((synonym, index) => (
    <span key={index} className="synonym text-purple-600">
      {synonym}
    </span>
  ))}
</div>

          </p>
        </div>
      )}
      {verb && (
        <div className="flex flex-row items-center text-lg font-bold font-serif">
          <p>{definitions[0].definition}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
