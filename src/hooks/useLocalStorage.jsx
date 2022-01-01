import { useState, useEffect } from "react";

const getSavedValue = (key, initialValue) => {

  //if there is a value stored under the given key, return it.
  const savedValue = JSON.parse(localStorage.getItem(key));
  if(savedValue){
    return savedValue;
  }

  //if the initial value is a function, return the result of the function.
  if(initialValue instanceof Function){
    return initialValue();
  }

  return initialValue;
}

export default function useLocalStoarage(key, initialValue){

  //leverage use state to store the state of the value
  const [value, setValue] = useState(() =>{
    return getSavedValue(key, initialValue);
  });

  // leverage use effect to update the local storage when chages are made to the key or value
  useEffect(()=>{    
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}