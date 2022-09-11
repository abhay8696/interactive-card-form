import React, { useState } from 'react';
import './App.css';

const FormDiv = props => {
    const {handleName, handleCardNumber, handleCVC, handleMonth, handleYear, handleSubmit, errorName, errorNum, errorMonth, errorYear, errorCVC} = props;

    //states


    return (
        <form className='form' onSubmit={evt=> handleSubmit(evt)}>
          <div className='nameDiv'>
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input 
            id= {errorName ? 'errorName':"name"} 
            placeholder='Jane Appleseed' 
            // value={name}
            onChange={e=> handleName(`${e.target.value}`)}/>
            {errorName ?<div className='errorMsg'>{errorName}</div>: null}
          </div>

          <div className='numberDiv'>
          <label htmlFor="number">CARDHOLDER NUMBER</label>
          <input 
            
            id={errorNum ? 'errorNum' : "number" }
            placeholder='0000 0000 0000 0000' 
            // type="number"
            // value={cardNumber}
            maxLength={16}
            onChange={e=>{
              if(e.target.value.length <= 16) handleCardNumber(`${e.target.value}`)
            }}/>
            {errorNum ?<div className='errorMsg'>{errorNum}</div>: null}
          </div>

          <div className='date-cvc'>
            <div className='dateDiv'>
              <label htmlFor="mm">EXP. DATE(MM/YY)</label>
              <div>
                <input 
                  
                  id={errorMonth ? 'errorMonth' : 'mm'}
                  placeholder='MM'
                  type="number"
                //   value={month}
                  onChange={e=> handleMonth(`${e.target.value}`)}
                />
                <input 
                  
                  id={errorYear? 'errorYear' : 'yy'}
                  placeholder='YY'
                  type="number"
                  onErrorCapture={()=> console.log('asdasd')}
                //   value={year}
                  onChange={e=> handleYear(`${e.target.value}`)}
                />
              </div>
              {errorMonth ?<div className='errorMsg'>{errorMonth}</div>: null}
              {errorYear ?<div className='errorMsg'>{errorYear}</div>: null}
            </div>
            <div className='cvcDiv'>
              <label htmlFor="cvc">CVC</label>
              <input 
                  
                id={errorCVC ? 'errorCVC' : 'cvc'} 
                placeholder='e.g. 123'
                // value={cvc}
                maxLength = {3}
                onChange={e=> handleCVC(`${e.target.value}`)}
              />
              {errorCVC ? <div className='errorMsg'>{errorCVC}</div> : null}
            </div>
          </div>

          <button type="submit" className='submit'>Confirm</button>
        </form>
    );
};

export default FormDiv;