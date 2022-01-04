import React from 'react';
import { useState } from 'react';

import './conditional-rendering-component.css';

const conditionalRenderFunction = (option) =>{
  if(option==="a"){
    return optionA();
  }else if(option==="b"){
    return optionB();
  }else if(option==="c"){
    return optionC();
  }
}

const optionA = () =>{
  return (
    <div className='conditional-rendering-option'>
      Example A
    </div>
  );
}
const optionB = () =>{
  return (
    <div className='conditional-rendering-option'>
      Example B
    </div>
  );
}
const optionC = () =>{
  return (
    <div className='conditional-rendering-option'>
      Example C
    </div>
  );
}


const ConditionalRenderingComponent = () => {

  const [renderOption, setRenderOption] = useState('a');


  return (
    <div className="conditional-rendering-container">
      <h1 className='component-title'>Conditional Rendering</h1>
      <div className='conditional-rendering-sub-container'>
        <p>Select an option to display</p>
        <div className='flex-container'>
          <button onClick={() =>{setRenderOption('a')} }>Option A</button>
          <button onClick={() =>{setRenderOption('b')} }>Option B</button>
          <button onClick={() =>{setRenderOption('c')} }>Option C</button>
        </div>
      </div>
      <div className='conditional-rendering-sub-container'>
        <p>Conditional rendering using a function</p>
        {conditionalRenderFunction(renderOption)}
      </div>
      <div className='conditional-rendering-sub-container'>
        <p>Conditional rendering using an inline if and logical && opperator</p>
        {renderOption ==='a' &&
          optionA()
        }      
        {renderOption ==='b' &&
          optionB()
        }   
        {renderOption ==='c' &&
          optionC()
        }   
      </div>
    </div>    
  );
}

export default ConditionalRenderingComponent;
