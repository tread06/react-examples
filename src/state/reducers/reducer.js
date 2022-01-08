// Store structure: [{id,description,resolved},{...},{...}]

import * as actions from '../actionTypes';

let lastId = 0;

//simple exmaple. No deep copy logic required.
//if there were nested objects, deep copy would be required.

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_ITEM:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload.id);

    case actions.RESOLVE_ITEM:      
      return state.map((item) => {
        if (item.id === action.payload.id) {          
          return { ...item, resolved: true };
        }
        return { ...item };
      });

    case actions.UNRESOLVE_ITEM:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, resolved: false };
        }
        return { ...item };
      });
    default:
      return state;
  }
}
