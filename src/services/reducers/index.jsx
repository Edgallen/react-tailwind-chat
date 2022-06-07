import {combineReducers} from "redux";
import { authReducer } from "./auth";
import { firebaseReducer } from "./firebase";
import { notificationReducer } from "./notification";

export const rootReducer = combineReducers({
  auth: authReducer,
  notification: notificationReducer,
  firebase: firebaseReducer
});