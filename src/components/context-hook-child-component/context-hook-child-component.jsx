import React from 'react';
import { useContext } from 'react';
import { CounterContext } from '../context-hook-component/context-hook-component';

import './context-hook-child-component.css';

const ContextHookChildComponent = (props) => {

  const counterContext = useContext(CounterContext);    

  return (
    <div className='context-child-container'>
      <p className='context-value-text'>
        {counterContext.value}
      </p>
      <div className='flex-container-col'>
      <button onClick={()=>counterContext.add(props.amount)}>
        <p>+ {props.amount}</p>
      </button>
      <button onClick={()=>counterContext.subtract(props.amount)}>
        <p>- {props.amount}</p>
      </button>
      </div>
    </div>
  );
}

export default ContextHookChildComponent;
