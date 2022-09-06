import { useState } from 'react';
import './App.css';
import front from './images/bg-card-front.png';
import back from './images/bg-card-back.png';

function App() {
  //states
  const 
  [name, setName] = useState(''),
  [cardNumber, setCardNumber] = useState(''),
  [month, setMonth] = useState(''),
  [year, setYear] = useState(''),
  [cvc, setCvc] = useState('');

  return (
    <div className="App">
      <div className='frontDiv'>
        <div className='frontData'>
          <span>{cardNumber}</span>
          <span>{name}</span>
          <span>{month}</span>
          <span>{year}</span>
          <span>{cvc}</span>
        </div>
        <img src={front} className='front'></img>
      </div>
      <div className='backDiv'>
        <img src={back} className='back'></img>
      </div>
      <div className='grad'></div>
      <div className='formDiv'>
        <form className='form'>
          <div className='nameDiv'>
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input id="name" placeholder='Jane Appleseed' onChange={e=> setName(e.target.value)}/>
          </div>

          <div className='numberDiv'>
          <label htmlFor="number" type="number">CARDHOLDER NUMBER</label>
          <input 
            id="number" 
            placeholder='1234 5678 0000' 
            onChange={e=> setCardNumber(e.target.value)}/>
          </div>

          <div className='dateDiv'>
            <label htmlFor="mm">EXP. DATE(MM/YY)</label>
            <input 
              id="mm" 
              placeholder='MM'
              onChange={e=> setMonth(e.target.value)}
            />
            <input 
              id="yy" 
              placeholder='YY'
              onChange={e=> setYear(e.target.value)}
            />

            <label htmlFor="cvc">CVC</label>
            <input 
              id='cvc' 
              placeholder='e.g. 123'
              onChange={e=> setCvc(e.target.value)}
            />
          </div>

          <div type="submit">Confirm</div>
        </form>
      </div>
    </div>
  );
}

export default App;
