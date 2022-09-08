import { useState } from 'react';
import './App.css';
import front from './images/bg-card-front.png';
import back from './images/bg-card-back.png';
import logo from './images/card-logo.svg';

//components
import FormDiv from './formDiv';

function App() {
  //states
  const 
  [name, setName] = useState(''),
  [cardNumber, setCardNumber] = useState(''),
  [month, setMonth] = useState(''),
  [year, setYear] = useState(''),
  [cvc, setCvc] = useState(''),
  [complete, setComplete] = useState(false);

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
  },
  handleName = str=> {
    setName(str);
  },
  handleMonth = str=> {
    setMonth(str)
  },
  handleYear = str=> {
    setYear(str)
  },
  handleSubmit = str=> {
    setComplete(true);
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
      <div className='mainBody'>
        {
        !complete ?
          <FormDiv 
          handleCardNumber={handleCardNumber} 
          handleCVC={handleCVC}
          handleName={handleName}
          handleMonth={handleMonth}
          handleYear={handleYear}
          handleSubmit={handleSubmit}
          />:
          <h1 onClick={()=> setComplete(false)}>THANK YOU</h1>
        }
      </div>
    </div>
  );
}

export default App;
