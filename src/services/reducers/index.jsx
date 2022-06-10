import {combineReducers} from "redux";
import { authReducer } from "./auth";
import { firebaseReducer } from "./firebase";
import { modalReducer } from "./modal";
import { chatReducer } from "./chat";

export const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  modal: modalReducer,
  firebase: firebaseReducer
});