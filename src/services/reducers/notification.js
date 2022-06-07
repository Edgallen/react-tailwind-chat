import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from "../actions/notification";

const initialState = {
  isVisible: false,
  message: '',
  color: ''
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION: {
      return {
        ...state, 
        isVisible: true,
        message: action.payload.message,
        color: action.payload.color
      }
    }
    case HIDE_NOTIFICATION: {
      return {
        ...state, 
        isVisible: false,
        message: ''
      }
    }
    default: {
      return state
    }
  }
};