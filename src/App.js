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
    if(str.length > 16) return;
    let arr = str.split(""), str2='';
    // ['0', '1', '2', '3', '4', '5',]
    for(let i=0; i<arr.length; i++){
      if(i===4 || i===8 || i===12){
        str2 = str2 + " " + arr[i]
      }else str2 = str2 + arr[i]
    }
    setCardNumber(str2)
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
                  id="mm" 
                  placeholder='MM'
                  value={month}
                  maxLength = {2}
                  onChange={e=> setMonth(e.target.value)}
                />
                <input 
                  id="yy" 
                  placeholder='YY'
                  value={year}
                  maxLength = {4}
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
                maxLength = {3}
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
