import './App.css';
import front from './images/bg-card-front.png';
import back from './images/bg-card-back.png';

function App() {
  return (
    <div className="App">
      <img src={front} className='front'></img>
      <img src={back} className='back'></img>
      <div className='grad'></div>
      <div className='formDiv'>
        <form className='form'>
          <div className='nameDiv'>
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input id="name" placeholder='Jane Appleseed'/>
          </div>

          <div className='numberDiv'>
          <label htmlFor="number" type="number">CARDHOLDER NUMBER</label>
          <input id="number" placeholder='1234 5678 0000'/>
          </div>

          <div className='dateDiv'>
            <label htmlFor="mm">EXP. DATE(MM/YY)</label>
            <input id="mm" placeholder='MM'/>
            <input id="yy" placeholder='YY'/>

            <label htmlFor="cvc">CVC</label>
            <input id='cvc' placeholder='e.g. 123'/>
          </div>

          <div type="submit">Confirm</div>
        </form>
      </div>
    </div>
  );
}

export default App;
