import React from 'react';
import '../css/Unavaliable.css';

const Unavaliable = () => {
    return (
        <div className="unavailable-container">
            <div className="unavailable-emoji">😞</div>
            <h2 className="unavailable-heading">"Oops, can't find the word here in the dictionary."</h2>
           
        </div>
    );
};

export default Unavaliable;

