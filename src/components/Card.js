import React from 'react';
import '../css/Card.css';
import Group4Icon from '../icons/Group 4.svg';
import RectangleIcon from '../icons/Rectangle.svg';
import OvalIcon from '../icons/Oval.svg';
import TablerIcon from '../icons/tabler_external-link.svg';

const Card = () => {
  return (
    <div className='group17'>
        <div className='group15'>
            <div className='group18'>
            <p className='text1'>keyboard</p>
            <p className='text2'>/ˈkiːbɔːd/</p>
            </div>
            <img className='group4-Icon'
            src={Group4Icon} alt="Group4 Icon" />
        </div>

        <div className='group14'>
            <div className='group2'>
                <p className='text3'>noun</p>
                <img className='rectangle-Icon'
                src={RectangleIcon} alt="rectangle Icon" />;
            </div>

            <div className='group11'>
                <p className='text4'>meaning</p>
                <div className='group6'>
                    <div className='group3'>
                        <img className='oval-Icon'
                        src={OvalIcon} alt="oval Icon" />
                        <p className='text5'>(etc.) A set of keys used to operate a typewriter, computer etc.</p>
                    </div>

                    <div className='group5'>
                        <img className='oval-Icon'
                        src={OvalIcon} alt="oval Icon" />
                        <p className='text6'>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</p>
                    </div>

                    <div className='group19'>
                    <img className='oval-Icon'
                    src={OvalIcon} alt="oval Icon" />
                    <p className='text7'>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</p>
                    </div>
                </div>

            </div>

            <div className='group9'>
                <p className='text8'>Synonyms</p>
                <p className='text9'>electronic keyboard</p>
            </div>
        </div>     

        <div className='group12'>
            <div className='group22'>
                <p className='text10'>verb</p>
                <img className='rectangle-Icon'
                src={RectangleIcon} alt="rectangle Icon" />;
            </div>
            <div className='group111'>
                <p className='text11'>Meaning</p>
                <div className='group66'>
                    <div className='group33'>
                        <img className='oval-Icon'
                        src={OvalIcon} alt="oval Icon" />
                        <p className='text12'>To type on a computer keyboard.</p>
                    </div>
                    <div className='group55'>
                        <p className='text13'>“Keyboarding is the part of this job I hate the most.”</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='group7'>
            <img className='rectangle-Icon'
            src={RectangleIcon} alt="rectangle Icon" />; 
            <div className='group25'>
                <p className='text14'>Source</p>
                <p className='text15'>https://en.wiktionary.org/wiki/keyboard</p>
                <img className='Tabler-Icon'
                src={TablerIcon} alt="Tabler Icon" />
            </div>
        </div>
    </div>
  )
}

export default Card