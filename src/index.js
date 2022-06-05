import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './index.css'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyByBo7z_AqEv9v3TA-Aon4RPrU0XxNdgTs",
    authDomain: "tailwind-react-chat.firebaseapp.com",
    projectId: "tailwind-react-chat",
    storageBucket: "tailwind-react-chat.appspot.com",
    messagingSenderId: "1051637642113",
    appId: "1:1051637642113:web:a643f270ddddb24d062e80",
    measurementId: "G-0GCN661HR6"
};

export const Context = createContext(null);

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore();
const auth = getAuth();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
        app,
        dataBase,
        auth
    }}>
        <App />
    </Context.Provider>
  </React.StrictMode>
);