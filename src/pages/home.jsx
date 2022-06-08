import React from 'react';
import Chat from '../components/Chat/Chat';
import Contacts from '../components/Contacts/Contacts';
import Navbar from '../components/NavBar/NavBar';

export const HomePage = () => {
    return (
        <>
            <Navbar />
            <main className='flex flex-row bg-background h-screen'>
                <Contacts />
                <Chat />
            </main>
        </>
    );
};