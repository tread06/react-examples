import React from 'react';
import useLocalStoarage from '../../hooks/useLocalStorage';

import './custom-hooks-component.css';

const CustomHooksComponent = () => {
  const [text, setText] = useLocalStoarage("customHookTextValue", '');

  return (
    <div role="main">
      <h1 className='component-title'>Custom Hook: useLocalStorage</h1>
      <p>
        A simple custom react hook that leverages use effect and use state to read from and write to local storage when a value changes.
      </p>
      <div className="flex-container">
        <label htmlFor="textInput">
          Store text in local storage: 
        </label>
        <input
        id="textInput"
        type="text"       
        value={text} 
        onChange={e => setText(e.target.value)}
        />      
      </div>      
    </div>
  );
}

export default CustomHooksComponent;