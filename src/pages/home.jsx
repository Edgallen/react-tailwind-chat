import React, {useEffect} from 'react';
import Chat from '../components/Chat/Chat';
import Contacts from '../components/Contacts/Contacts';
import Navbar from '../components/NavBar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { contactsRequest, contactsSuccess } from '../services/actions/chat';
import { collection, getDoc, getDocs, getFirestore, query, setDoc, doc, updateDoc } from "firebase/firestore";
import {uidRequest} from "../services/actions/auth";

export const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(uidRequest());
    }, []);

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