import {combineReducers} from "redux";
import { firebaseReducer } from "./firebase";
import { notificationReducer } from "./notification";

export const rootReducer = combineReducers({
  notification: notificationReducer,
  firebase: firebaseReducer
});