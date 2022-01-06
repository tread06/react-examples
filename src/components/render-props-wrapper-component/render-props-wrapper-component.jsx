import React from 'react';
import { useState } from 'react';

import './render-props-wrapper-component.css'

const RenderPropsWrapperComponent = (props) => {

  const [currentValue, setCurrentValue] = useState(5);
  const [maxValue, setMaxValue] = useState(10);

  return (
    <div className='render-props-wrapper-container'>
      <h1 className='component-title'>Using Render Props: Sharing Component State</h1>
      <p>
        This is an example of using render props to render different progress bar components using the same wrapper and state.
      </p>
      <div  className='render-props-inner-container'>
        <div className='render-props-input-container'>
          <div>
            <input 
              type="number"
              id="currentInput"
              min={0}
              value={currentValue} 
              onChange={e => setCurrentValue(e.target.value)}>
            </input>          
            <label htmlFor="currentInput">Current Value</label>          
          </div>          
          <div>
            <input 
              type="number"
              min="1"
              id="maxInput"
              value={maxValue} 
              onChange={e => setMaxValue(e.target.value)}
            ></input>          
            <label htmlFor="maxInput">Max Value</label>
          </div>
          
        </div>
        <div className='render-props-bar-container'>
          {props.bar1(currentValue, maxValue)}
          {props.bar2(currentValue, maxValue)}          
        </div>
      </div>
      
      
    </div>
  );
}

export default RenderPropsWrapperComponent;
