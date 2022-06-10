import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from "../actions/modal";

const initialState = {

  notification: {
    isVisible: false,
    message: '',
    color: ''
  }
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION: {
      return {
        ...state,
        notification: {
          ...state.notification,
          isVisible: true,
          message: action.payload.message,
          color: action.payload.color
        }
      }
    }
    case HIDE_NOTIFICATION: {
      return {
        ...state,
        notification: {
          ...state.notification,
          isVisible: false,
          message: ''
        }
      }
    }
    default: {
      return state
    }
  }
};