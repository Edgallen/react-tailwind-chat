import { GET_CONTACTS_REQUEST } from "../actions/chat";

const initialState = {
  contacts: [],
  isLoading: false,
  isError: false
};

export const chatReducer = (state = initialState, action) => {
  switch(action.type) {
    case (GET_CONTACTS_REQUEST): {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    default: {
      return state
    }
  }
};