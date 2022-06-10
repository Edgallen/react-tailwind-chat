import React, {useEffect} from 'react';
import Chat from '../components/Chat/Chat';
import Contacts from '../components/Contacts/Contacts';
import Navbar from '../components/NavBar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { contactsRequest, contactsSuccess } from '../services/actions/chat';
import { collection, getDoc, getFirestore, setDoc, doc, updateDoc } from "firebase/firestore";

export const HomePage = () => {
    const dispatch = useDispatch();

    const auth = getAuth();
    const dataBase = getFirestore();
    const userDataRef = collection(dataBase, "userData");

    const addContact = async (arr, uid) => {

        // const docSnap = doc(userDataRef, uid);


        // await updateDoc(docSnap, {
        //     userContacts: [{
        //         avatar: null,
        //         name: 'Артур',
        //         message: 'Привет, как дела?',
        //         time: '11:00',
        //         unread: 400,
        //         active: false
        //     }]
        // });

        // await setDoc(doc(userDataRef, uid), {
        //     avatar: null,
        //     name: 'Артур',
        //     message: 'Привет, как дела?',
        //     time: '11:00',
        //     unread: 400,
        //     active: false
        // });
        // await setDoc(doc(userDataRef, uid), {
        //     avatar: null,
        //     name: 'Максим',
        //     message: 'Привет, как дела?',
        //     time: '11:00',
        //     unread: 400,
        //     active: false
        // });
        // await setDoc(doc(userDataRef, uid), {
        //     avatar: null,
        //     name: 'Влад',
        //     message: 'Привет, как дела?',
        //     time: '11:00',
        //     unread: 400,
        //     active: false
        // });
        // await setDoc(doc(userDataRef, uid), {
        //     avatar: null,
        //     name: 'Петр',
        //     message: 'Привет, как дела?',
        //     time: '11:00',
        //     unread: 400,
        //     active: false
        // });
    };

    const getContacts = async (uid) => {
        const docRef = doc(dataBase, "userData", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            addContact(uid)
            console.log(docSnap.data().userContacts)

            dispatch(contactsSuccess(docSnap.data().userContacts))
        }
    };

    useEffect(() => {
        dispatch(contactsRequest());

        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                getContacts(uid);
            }
        });

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