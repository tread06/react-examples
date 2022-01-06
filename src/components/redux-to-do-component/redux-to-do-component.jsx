import React, { useEffect } from 'react';
import store from '../../state/store';
import { addItem, removeItem, resolveItem, unresoveItem } from '../../state/actions';

import './redux-to-do-component.css';

const ReduxToDoComponent = () => { 
  
  const add = (itemDescription) =>{    
    store.dispatch(addItem(itemDescription));
  }
  const remove = (itemId) =>{    
    store.dispatch(removeItem(itemId));
  }  
  const resolve = (itemId) =>{    
    store.dispatch(resolveItem(itemId));
  }  
  const unresove = (itemId) =>{    
    store.dispatch(unresoveItem(itemId));
  }  
  
  //testing
  add('First item');  
  add('Second Item');  
  add('Third Item');  
  remove(1);
  resolve(2);
  resolve(3);
  unresove(2);

  console.log("Redux store state: ");
  console.log(store.getState());  

  //subscribe to redux store changes
  useEffect(() => {
    const unsubscribe = store.subscribe(() =>{
      //to do: replace with UI animation
      console.log("Store was updated", store.getState());
    })
    return () =>{
      unsubscribe();
    }    
  });

  
  return (
    <div>
      <h1 className='component-title'>Redux: To Do List</h1>
      <p>
        An example of using Redux to store and update the state of an app using funtional programming concepts.
      </p>          
    </div>
  );
}

export default ReduxToDoComponent;