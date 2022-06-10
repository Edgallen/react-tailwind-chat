import {
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_SUCCESS
} from "../actions/chat";

const initialState = {
  contacts: [],
  isLoading: false,
  isError: false,
  userUid: ''
};

export const chatReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_CONTACTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case GET_CONTACTS_SUCCESS: {
      return {
        ...state,
        contacts: [action.payload],
        isLoading: false,
      }
    }
    default: {
      return state
    }
  }
};