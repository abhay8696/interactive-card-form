import { useState } from 'react';
import './App.css';
import front from './images/bg-card-front.png';
import back from './images/bg-card-back.png';
import logo from './images/card-logo.svg';

//components
import FormDiv from './formDiv';
import ThankYou from './thankYou';

function App() {
  //states
  const 
  [name, setName] = useState(''),
  [cardNumber, setCardNumber] = useState(''),
  [month, setMonth] = useState(''),
  [year, setYear] = useState(''),
  [cvc, setCvc] = useState(''),
  [complete, setComplete] = useState(false),
  [errorName, setErrorName] = useState(false),
  [errorNum, setErrorNum] = useState(false),
  [errorMonth, setErrorMonth] = useState(null),
  [errorYear, setErrorYear] = useState(false),
  [errorCVC, setErrorCVC] = useState(false);

  //functions
  const
  handleCardNumber = str=> {
    if(str.length > 16) return;
    let nan = false;
    let arr = str.split(""), str2='';
    // ['0', '1', '2', '3', '4', '5',]
    for(let i=0; i<arr.length; i++){
      if(!Number(arr[i])) nan = true;
      if(i===4 || i===8 || i===12){
        str2 = str2 + " " + arr[i]
      }else str2 = str2 + arr[i]
    }
    setCardNumber(str2);
    if(nan) setErrorNum('Only Numeric Digits allowed');
    else setErrorNum(null);
  },
  handleCVC = str=> {
    setErrorCVC(null);
    setCvc(str)
  },
  handleName = str=> {
    setErrorName(null);
    setName(str);
  },
  handleMonth = str=> {
    setErrorMonth(null);
    setMonth(str);
  },
  handleYear = str=> {
    setErrorYear(null);
    setYear(str);
  },
  handleSubmit = evt=> {
    evt.preventDefault();
    if(
      !name?.length || 
      cardNumber?.length<19 || 
      errorNum ||
      +(month)<1 || 
      +month>12 || 
      +year<22 ||
      +year>100 ||
      cvc?.length<3){

      !name?.length ? inputError(name) : setErrorName(null);
      cardNumber?.length<19 || errorNum ? inputError(cardNumber) : setErrorNum(null);
      +month<1 || +month>12 ? inputError(month) : setErrorMonth(null);
      +year<22 || +year>100 ? inputError(year) : setErrorYear(null);
      cvc?.length<3 ? inputError(cvc) : setErrorCVC(null)
    }
    else setComplete(true);
  },
  handleContinue = ()=> {
    setComplete(false);
    setName("");
    setCardNumber("");
    setMonth("");
    setYear("");
    setCvc("");

  },
  inputError= (type, errorNote)=> {
    if(type === name){
      if(!name?.length) setErrorName('Empty Field!');
    }
    if(type === cardNumber){
      if(!cardNumber?.length) setErrorNum('Empty Field!');
      if(cardNumber?.length < 19 && !errorNote) setErrorNum('Less than 16 digits!');
      if(errorNote === 'alphabet') setErrorNum('Only Numeric Digits allowed!');
    }
    if(type === month){
      if(!month?.length) setErrorMonth('Empty Field!');
      if(month < 1 || month > 12) setErrorMonth('Month Invalid!');
    }
    if(type === year){
      if(!year?.length) setErrorYear('Empty Field!');
      if(year < 22 || year > 100) setErrorYear('Year needs to be bewteen 22 to 100');
    }
    if(type === cvc){
      if(!cvc?.length) setErrorCVC('Empty Field!');
      if(cvc?.length < 3) setErrorCVC('Atleast 3 digits needed in CVC');
    }
  }

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
          errorName = {errorName}
          errorNum = {errorNum} 
          errorMonth = {errorMonth}
          errorYear = {errorYear}
          errorCVC = {errorCVC}
          />:
          <ThankYou handleContinue={handleContinue}/>
        }
      </div>
    </div>
  );
}

export default App;
