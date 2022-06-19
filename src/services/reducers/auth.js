import {
  HIDE_EMAIL_ERROR,
  SHOW_EMAIL_ERROR,
  SHOW_PASSWORD_ERROR,
  HIDE_PASSWORD_ERROR,
  FORGOT_PASSWORD,
  RESTORED_PASSWORD,
  GET_USER_UID,
  SET_USER_UID
} from "../actions/auth";

const initialState = {
  wrongPassword: {
    state: false,
    message: ''
  },

  wrongEmail: {
    state: false,
    message: ''
  },

  forgotPassword: false,

  userData: {
    userUid: '',
    uidIsLoading: false
  }
}

export const authReducer = (state = initialState, action) => {
  switch(action.type){
    case SHOW_EMAIL_ERROR:{
      return {
        ...state,
        wrongEmail: {
          ...state.wrongEmail,
          state: true,
          message: action.payload
        }
      };
    }
    case HIDE_EMAIL_ERROR:{
      return {
        ...state,
        wrongEmail: {
          ...state.wrongEmail,
          state: false,
          message: ''
        }
      };
    }
    case SHOW_PASSWORD_ERROR:{
      return {
        ...state,
        wrongPassword: {
          ...state.wrongPassword,
          state: true,
          message: action.payload
        }
      };
    }
    case HIDE_PASSWORD_ERROR:{
      return {
        ...state,
        wrongPassword: {
          ...state.wrongPassword,
          state: false,
          message: ''
        }
      };
    }
    case FORGOT_PASSWORD:{
      return {
        ...state,
        forgotPassword: true
      };
    }
    case RESTORED_PASSWORD:{
      return {
        ...state,
        forgotPassword: false
      };
    }
    case GET_USER_UID:{
      return {
        ...state,
        userData: {
          ...state.userData,
          uidIsLoading: true
        }
      };
    }
    case SET_USER_UID:{
      return {
        ...state,
        userData: {
          ...state.userData,
          userUid: action.payload,
          uidIsLoading: false
        }
      };
    }
    default: {
      return state
    }
  }
}