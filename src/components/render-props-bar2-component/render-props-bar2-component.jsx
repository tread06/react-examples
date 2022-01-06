import React from 'react';
import { useState, useEffect } from 'react';

import './render-props-bar2-component.css'

const RenderPropsBar2Component = (props) => {

  const [width, SetWidth] = useState('0%');

  useEffect(() => {
    //only update if max is greater than 0 --- cannot divide by zero
    if(props.max > 0){

      let widthValue = Math.min((props.current / props.max * 100), 100);
      SetWidth(widthValue.toString() + '%');
    }
  }, [props]); 

  return (
    <div className='render-props-bar2-container'>      
      <div className='progress-bar2-background'>
        <div className='progress-bar2-foreground' style={{width: width}}></div>         
        <h2 className='progress-bar2-text'>{props.current} / {props.max}</h2>
      </div>
    </div>
  );
}

export default RenderPropsBar2Component;
