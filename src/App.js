import { useState } from 'react';
import './App.css';
import front from './images/bg-card-front.png';
import back from './images/bg-card-back.png';
import logo from './images/card-logo.svg'

function App() {
  //states
  const 
  [name, setName] = useState(''),
  [cardNumber, setCardNumber] = useState(''),
  [month, setMonth] = useState(''),
  [year, setYear] = useState(''),
  [cvc, setCvc] = useState('');

  //functions
  const
  handleCardNumber = str=> {
    if(str?.length % 4 === 1 && str.length > 1){

    }
    setCardNumber(str)
  },
  handleCVC = str=> {
    if(str?.length <= 3) setCvc(str)
  }
  //0123 56789 1234 6

  return (
    <div className="App">
      <div className='backDiv'>
        <div className='backSide'>
          <span>{cvc?.length ? cvc : '000'}</span>
        </div>
        <img src={back} className='backImg'></img>
      </div>
      <div className='frontDiv'>
        <div className='frontSide'>
          <img src={logo} className='cardLogo'/>
          <div className='frontData'>
            <div className='cardNum'>{cardNumber?.length ? cardNumber : '0000 0000 0000 0000'}</div>
            <div className='name-date'>
              <span>{name?.length ? name : 'Jane Appleseed'}</span>
              <div>
                <span>{month?.length ? month : 'MM'}</span>/
                <span>{year?.length ? year : 'YY'}</span>
              </div>
            </div>
          </div>
        </div>
        <img src={front} className='frontImg'></img>
      </div>
      <div className='grad'></div>
      <div className='formDiv'>
        <form className='form'>
          <div className='nameDiv'>
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input 
            id="name" 
            placeholder='Jane Appleseed' 
            value={name}
            onChange={e=> setName(e.target.value)}/>
          </div>

          <div className='numberDiv'>
          <label htmlFor="number" type="number">CARDHOLDER NUMBER</label>
          <input 
            id="number" 
            placeholder='0000 0000 0000 0000' 
            type='number'
            value={cardNumber}
            onChange={e=> handleCardNumber(`${e.target.value}`)}/>
          </div>

          <div className='date-cvc'>
            <div className='dateDiv'>
              <label htmlFor="mm">EXP. DATE(MM/YY)</label>
              <div>
                <input 
                  id="mm" 
                  placeholder='MM'
                  value={month}
                  onChange={e=> setMonth(e.target.value)}
                />
                <input 
                  id="yy" 
                  placeholder='YY'
                  value={year}
                  onChange={e=> setYear(e.target.value)}
                />
              </div>
            </div>
            <div className='cvcDiv'>
              <label htmlFor="cvc">CVC</label>
              <input 
                id='cvc' 
                placeholder='e.g. 123'
                value={cvc}
                onChange={e=> handleCVC(`${e.target.value}`)}
              />
            </div>
          </div>

          <div type="submit" id='submit'>Confirm</div>
        </form>
      </div>
    </div>
  );
}

export default App;
