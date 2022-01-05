import React from 'react';
import { useRef } from 'react';

import './refs-component.css'

const RefsComponent = () => {

  const foucsA = () =>{   
    refA.current.focus();
  }
  const foucsB = () =>{   
    refB.current.focus();
  }
  const foucsC = () =>{    
    refC.current.focus();
  }

  const refA = useRef(null);
  const refB = useRef(null);
  const refC = useRef(null);

  return (
    <div className='refs-component-container'>
      <h1 className='component-title'>Using Refs: Setting Focus</h1>
      <p>
        This is an example of using refs to focus on specific DOM elements.
      </p>
      <div className="flex-container">
        <div>
          <button onClick={foucsA}>Focus A</button>
          <button onClick={foucsB}>Focus B</button>
          <button onClick={foucsC}>Focus C</button>
        </div> 
        <div>
          <input placeholder='Input A' ref={refA} type="text" />
          <input placeholder='Input B' ref={refB} type="text" />
          <input placeholder='Input C' ref={refC} type="text" />
        </div> 
      </div>
      
    </div>
  );
}

export default RefsComponent;
