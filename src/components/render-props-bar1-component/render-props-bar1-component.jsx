import React from 'react';
import { useState, useEffect } from 'react';

import './render-props-bar1-component.css'

const RenderPropsBar1Component = (props) => {

  const [width, SetWidth] = useState('0%');

  useEffect(() => {
    //only update if max is greater than 0 --- cannot divide by zero
    if(props.max > 0){
      let widthValue = Math.min((props.current / props.max * 100), 100);
      SetWidth(widthValue.toString() + '%');
    }
  }, [props]); 

  return (
    <div className='render-props-bar1-container'>
      <h2>{props.current} / {props.max}</h2>
      <div className='progress-bar1-background'>
        <div className='progress-bar1-foreground' style={{width: width}}>
        </div>
      </div>
    </div>
  );
}
export default RenderPropsBar1Component;
