import { INITIALIZE_APP } from "../actions/firebase";

const initialState = {
  auth: null
};

export const firebaseReducer = (state = initialState, action) => {
  switch(action.type) {
    case INITIALIZE_APP: {
      return {
        ...state,
        auth: action.payload
      }
    }
    default: {
      return state
    }
  }
}