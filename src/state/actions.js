import * as actions from './actionTypes';

export const addItem = (itemDescription) =>{    
  return {
    type: actions.ADD_ITEM,
    payload: {
      description: itemDescription
    }
  };
}
export const removeItem = (itemId) =>{    
  return{
    type: actions.REMOVE_ITEM,
    payload: {
      id: itemId
    }
  };
}  
export const resolveItem = (itemId) =>{    
  return{
    type: actions.RESOLVE_ITEM,
    payload: {
      id: itemId
    }
  };
}  
export const unresoveItem = (itemId) =>{    
  return{
    type: actions.UNRESOLVE_ITEM,
    payload: {
      id: itemId
    }
  };
}  