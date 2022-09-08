import React, { useState } from 'react';
import './App.css';

const FormDiv = props => {
    const {handleName, handleCardNumber, handleCVC, handleMonth, handleYear, handleSubmit} = props;

    return (
        <form className='form' onSubmit={handleSubmit}>
          <div className='nameDiv'>
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input 
            required
            id="name" 
            placeholder='Jane Appleseed' 
            // value={name}
            onChange={e=> handleName(`${e.target.value}`)}/>
          </div>

          <div className='numberDiv'>
          <label htmlFor="number" type="number">CARDHOLDER NUMBER</label>
          <input 
            required
            id="number" 
            placeholder='0000 0000 0000 0000' 
            // value={cardNumber}
            maxLength={16}
            onChange={e=>{
              if(e.target.value.length <= 16) handleCardNumber(`${e.target.value}`)
            }}/>
          </div>

          <div className='date-cvc'>
            <div className='dateDiv'>
              <label htmlFor="mm">EXP. DATE(MM/YY)</label>
              <div>
                <input 
            required
                  id="mm" 
                  placeholder='MM'
                //   value={month}
                  maxLength = {2}
                  onChange={e=> handleMonth(`${e.target.value}`)}
                />
                <input 
            required
                  id="yy" 
                  placeholder='YY'
                //   value={year}
                  maxLength = {4}
                  onChange={e=> handleYear(`${e.target.value}`)}
                />
              </div>
            </div>
            <div className='cvcDiv'>
              <label htmlFor="cvc">CVC</label>
              <input 
            required
                id='cvc' 
                placeholder='e.g. 123'
                // value={cvc}
                maxLength = {3}
                onChange={e=> handleCVC(`${e.target.value}`)}
              />
            </div>
          </div>

          <button type="submit" id='submit'>Confirm</button>
        </form>
    );
};

export default FormDiv;