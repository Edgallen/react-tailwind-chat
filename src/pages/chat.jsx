import React from 'react';
import {getAuth, signOut} from "firebase/auth";

export const Chat = () => {
    const auth = getAuth();

    const userSignOut = async (e) => {
        e.preventDefault();
        await signOut(auth);
    }

    return (
        <div>
            <h1>Chat</h1>
            <button
                onClick={userSignOut}
            >
                Выйти
            </button>
        </div>
    );
};