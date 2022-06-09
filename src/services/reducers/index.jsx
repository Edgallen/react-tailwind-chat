import {combineReducers} from "redux";
import { authReducer } from "./auth";
import { firebaseReducer } from "./firebase";
import { notificationReducer } from "./notification";
import { chatReducer } from "./chat";

export const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  notification: notificationReducer,
  firebase: firebaseReducer
});