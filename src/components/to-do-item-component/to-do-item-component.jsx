import React from 'react';

import './to-do-item-component.css'

const ToDoItemComponent = (props) => { 
  return (
    <div key={props.item.id} className='to-do-item-container'>
      <p className="to-do-item-id" key={props.item.id + "id"}>{props.item.id}</p>
      <p className="to-do-item-description" key={props.item.id + "name"}>{props.item.description}</p>
      <div className='to-do-item-button-container'> 
        <button 
        className={props.item.resolved ? 'to-do-item-button-toggle-resolved' : 'to-do-item-button-toggle-unresolved'}
        onClick={props.item.resolved ? props.unresolve : props.resolve}
        >
          {
            props.item.resolved ? 'Resolved' : 'Unresolved'
          }
        </button>
        <button
          onClick={props.remove}
          className='to-do-item-button-delete'>X</button>
      </div>
    </div>
  );
}

export default ToDoItemComponent;
