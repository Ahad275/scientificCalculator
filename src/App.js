import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('0'); // State to store input

  const display = (value) => {
    setInput((prevInput) => (prevInput === '0' ? value : prevInput + value));
  };

  const clearInput = () => {
    setInput('0');
  };

  const backspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1) || '0');
  };

  const calculateResult = () => {
    try {
      const result = eval(input); // Be cautious with eval
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const calculateTrig = (func) => {
    try {
      const result = Math[func](parseFloat(input) * (Math.PI / 180)); // Convert degrees to radians
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const calculateHyperbolic = (func) => {
    try {
      const result = Math[func](parseFloat(input));
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const calculateReciprocal = () => {
    try {
      const result = 1 / parseFloat(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const calculateSquareRoot = () => {
    try {
      const result = Math.sqrt(parseFloat(input));
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const calculateCubeRoot = () => {
    try {
      const result = Math.cbrt(parseFloat(input));
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const calculateYRoot = () => {
    try {
      setInput((prevInput) => prevInput + '**(1/');
    } catch (error) {
      setInput('Error');
    }
  };

  const calculateSquare = () => {
    try {
      const result = Math.pow(parseFloat(input), 2);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const calculateCube = () => {
    try {
      const result = Math.pow(parseFloat(input), 3);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const calculatePowerOf10 = () => {
    try {
      const result = Math.pow(10, parseFloat(input));
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const calculateFactorial = () => {
    try {
      const factorial = (n) => {
        if (n === 0) return 1;
        return n * factorial(n - 1);
      };
      const result = factorial(parseFloat(input));
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const calculatePower = () => {
    setInput((prevInput) => prevInput + '**');
  };

  const calculateExponential = () => {
    try {
      const result = Math.exp(parseFloat(input));
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const insertE = () => {
    setInput((prevInput) => prevInput === '0' ? Math.E.toString() : prevInput + Math.E.toString());
  };

  const insertPi = () => {
    setInput((prevInput) => prevInput === '0' ? Math.PI.toString() : prevInput + Math.PI.toString());
  };

  const insertEE = () => {
    setInput((prevInput) => prevInput + 'e');
  };

  const generateRandom = () => {
    setInput(Math.floor(Math.random() * 100).toString());
  };

  const calculateLogBase10 = () => {
    try {
      const result = Math.log10(parseFloat(input));
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const calculateLogBase2 = () => {
    try {
      const result = Math.log2(parseFloat(input));
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const calculateRadian = () => {
    try {
      const result = parseFloat(input) * (Math.PI / 180);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="main">
      <input type="text" id="res" value={input} placeholder='0' readOnly />

      <div className="btn">
        <input className="butmath" type="button" value="(" onClick={() => display('(')} />
        <input className="butmath" type="button" value=")" onClick={() => display(')')} />
        <input className="butt" type="button" value="sin" onClick={() => calculateTrig('sin')} />
        <input className="butt" type="button" value="cos" onClick={() => calculateTrig('cos')} />
        <input className="butt" type="button" value="tan" onClick={() => calculateTrig('tan')} />

        <input className="butd" type="button" value="C" onClick={clearInput} />
        <input className="butd" type="button" value="←" onClick={backspace} />
        <input className="butd" type="button" value="%" onClick={() => display('%')} />
        <input className="butop" type="button" value="/" onClick={() => display('/')} style={{ backgroundColor: 'rgb(219, 113, 26)' }} />

        <br />
        <input className="butmath" type="button" value="EE" onClick={insertEE} />
        <input className="butmath" type="button" value="e" onClick={insertE} />
        <input className="buth" type="button" value="sinh" onClick={() => calculateHyperbolic('sinh')} />
        <input className="buth" type="button" value="cosh" onClick={() => calculateHyperbolic('cosh')} />
        <input className="buth" type="button" value="tanh" onClick={() => calculateHyperbolic('tanh')} />

        <input className='buttonlight' type="button" value="7" onClick={() => display('7')} />
        <input className='buttonlight' type="button" value="8" onClick={() => display('8')} />
        <input className='buttonlight' type="button" value="9" onClick={() => display('9')} />
        <input className="butop" type="button" value="*" onClick={() => display('*')} style={{ backgroundColor: 'rgb(219, 113, 26)' }} />

        <br />
        <input className="butmath" type="button" value="x²" onClick={calculateSquare} />
        <input className="butmath" type="button" value="x³" onClick={calculateCube} />
        <input className="butmath" type="button" value="10^x" onClick={calculatePowerOf10} />
        <input className="butmath" type="button" value="x^y" onClick={calculatePower} />
        <input className="butmath" type="button" value="e^x" onClick={calculateExponential} />

        <input className='buttonlight' type="button" value="4" onClick={() => display('4')} />
        <input className='buttonlight' type="button" value="5" onClick={() => display('5')} />
        <input className='buttonlight' type="button" value="6" onClick={() => display('6')} />
        <input className="butop" type="button" value="-" onClick={() => display('-')} style={{ backgroundColor: 'rgb(219, 113, 26)' }} />

        <br />
        <input className="butmath" type="button" value="x!" onClick={calculateFactorial} />
        <input className="butmath" type="button" value="1/x" onClick={calculateReciprocal} />
        <input className="butmath" type="button" value="2√x" onClick={calculateSquareRoot} />
        <input className="butmath" type="button" value="3√x" onClick={calculateCubeRoot} />
        <input className="butmath" type="button" value="y√x" onClick={calculateYRoot} />

       
        <input className='buttonlight' type="button" value="1" onClick={() => display('1')} />
        <input className='buttonlight' type="button" value="2" onClick={() => display('2')} />
        <input className='buttonlight' type="button" value="3" onClick={() => display('3')} />
        <input className="butop" type="button" value="+" onClick={() => display('+')} style={{ backgroundColor: 'rgb(219, 113, 26)' }} />


        <br />
        <input className="butmath" type="button" value="log10" onClick={calculateLogBase10} style={{ fontSize: '28px' }} />
        <input className="butmath" type="button" value="log2" onClick={calculateLogBase2} />
        <input className="butmath" type="button" value="Rad" onClick={calculateRadian} />
        <input className="butmath" type="button" value="π" onClick={insertPi} />
        <input className="butmath" type="button" value="Rand" onClick={generateRandom} style={{ fontSize: '28px' }} />


        <input className='buttonlight' type="button" value="00" onClick={() => display('00')} />
        <input className='buttonlight' type="button" value="0" onClick={() => display('0')} />
        <input className='buttonlight' type="button" value="." onClick={() => display('.')} />
        <input className="butop" type="button" value="=" onClick={calculateResult} style={{ backgroundColor: 'rgb(219, 113, 26)' }} />


      </div>
    </div>
  );
}

export default App;
