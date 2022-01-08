import React, { useEffect, useState } from 'react';
import store from '../../state/store';
import { addItem, removeItem, resolveItem, unresoveItem } from '../../state/actions';
import ToDoItemComponent from '../to-do-item-component/to-do-item-component';

import './redux-to-do-component.css';

const ReduxToDoComponent = () => { 

  const [newItemDescription, setNewItemDescription] = useState("");
  const [toDoList, setToDoList] = useState([]);
  
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
  //add('First item');  
  //add('Second Item');  
  //add('Third Item'); 
  // remove(1);
  // resolve(2);
  // resolve(3);
  // unresove(2);

  // console.log("Redux store state: ");
  // console.log(store.getState());  

  //subscribe to redux store changes
  useEffect(() => {  
    const unsubscribe = store.subscribe(() =>{
      //to do: replace with UI animation
      //console.log("Store was updated", store.getState());
      setToDoList(store.getState());
    })
    return () =>{
      unsubscribe();
    }    
  });

  
  return (    

    <div className='redux-to-do-component'>
      <h1 className='component-title'>Redux: To Do List</h1>
      <p>
        An example of using Redux to store and update the state of an app using funtional programming concepts.
      </p>          

      <div className='flex-container'>   
        <div>
          <input 
            id="new-item-description" 
            type="text" 
            value={newItemDescription}
            onChange={e => setNewItemDescription(e.target.value)}
            placeholder='New Item'
          />
          <label htmlFor="new-item-description">Item Description</label>
        </div>    
        <div>
          <button 
            className='add-to-do-item-button'          
            onClick={() => {add(newItemDescription)}}
          >Add New Item</button>
        </div> 
      </div>

      {toDoList.map((item) =>{
        return <ToDoItemComponent         
        resolve = {() =>{resolve(item.id)}} 
        unresolve = {() =>{unresove(item.id)}} 
        remove = {() =>{remove(item.id)}} 
        key={item.id} 
        item ={item} />
      })}

    </div>
  );
}

export default ReduxToDoComponent;