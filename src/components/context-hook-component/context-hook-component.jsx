import React from 'react';
import { useState } from 'react';
import { createContext } from 'react/cjs/react.development';
import ContextHookChildComponent from '../context-hook-child-component/context-hook-child-component';

import './context-hook-component.css';

export const CounterContext = createContext(); 

const ContextHookComponent = () => {  

  const add = (amount) =>{ 
    setValue(value+amount);
  }
  const subtract = (amount) =>{
    setValue(value-amount); }

  const [value, setValue] = useState(0);   

  return (
    <CounterContext.Provider value={{
      value: value,
      add: add,
      subtract: subtract
    }}>
      <h1 className='component-title'>Using the Context Hook: Shared Counter</h1>
      <p>
        This is an example of using context to allow multiple components to access the same shared counter logic and state on a parent component.
      </p>
      <div className="flex-container">
        <ContextHookChildComponent amount={1}/>
        <ContextHookChildComponent amount={10} />
        <ContextHookChildComponent amount={100} />
      </div> 
    </CounterContext.Provider>
  );
}

export default ContextHookComponent;
