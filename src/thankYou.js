import React from 'react';
import './App.css';

const ThankYou = props => {
    const { handleContinue } =props;
    return (
        <div className='thankYouComp'>
            <div className='doneIcon'>
            <span class="material-symbols-outlined"> done </span>
            </div>
            <span className='thankYou'>Thank You!</span>
            <span className='thankYouText'>We'ev added your card details</span>
            <button className='submit' onClick={()=> handleContinue()}>Continue</button>
        </div>
    );
};

export default ThankYou;