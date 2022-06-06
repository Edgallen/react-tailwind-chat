import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from "../actions/notification";

const initialState = {
  notification: false
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION: {
      return {
        ...state, 
        notification: true
      }
    }
    case HIDE_NOTIFICATION: {
      return {
        ...state, 
        notification: false
      }
    }
    default: {
      return state
    }
  }
};