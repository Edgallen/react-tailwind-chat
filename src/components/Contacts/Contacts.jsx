import React, { useState, useEffect } from 'react';
import contactAvatar from '../../images/contactAvatar.png';
import avatar from '../../images/avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from "boring-avatars";
import { collection, getDocs, addDoc, getFirestore, setDoc, doc } from "firebase/firestore";
import {
  getAuth
} from "firebase/auth";

const Contact = ({contact, index, click}) => {
  const active = contact.active ? 'bg-secondary text-white' : 'bg-placeholder'
  const firstLetter = contact.name.toLocaleUpperCase()[0];

  return (
    <div className={
      `flex flex-row justify-between items-center py-4 mb-1 text-primary cursor-pointer
      ${contact.active ? 'bg-secondary text-white' : 'bg-placeholder'}`}
    >
      <div className='flex flex-row items-center gap-4 ml-2 z-1'>
        {/* <img 
          className='w-14 h-14 rounded-full'
          src={contact.avatar} 
          alt="Avatar" 
        /> */}
        <div className='flex flex-col items-center justify-center relative'>
          <Avatar
            size={55}
            name={contact.name}
            variant="marble"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
          <span
            className='text-white text-center text-2xl font-medium absolute'
          >
            {firstLetter}
          </span>
        </div>

        <div className='flex flex-col gap-1'>
          <h1
            className='text-lg font-medium'
          >
            {contact.name}
          </h1>

          <h2
            className={`text-base ${contact.active ? 'text-white' : 'text-inActive'}`}
          >
            {contact.message}
          </h2>
        </div>
      </div>

      <div className='flex flex-col items-center mr-3 gap-1'>
        <p 
          className={`text-sm font-medium ${contact.active ? 'text-white' : 'text-inActive'}`}
        >
          {contact.time}
        </p>

        <div 
          className={`flex justify-center items-center py-1 px-2 rounded-full
          ${contact.active ? 'text-secondary bg-white' : 'text-white bg-secondary'}`}
        >
          <span className='text-sm font-medium'>
            {contact.unread}
          </span>
        </div>
      </div>
    </div>
  )
};

const Contacts = () => {
  const uid = useSelector(store => store.auth.userData.userUid);
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = auth.currentUser;

  const [contacts, setContacts] = useState([
    {
      avatar: avatar,
      name: 'Артур',
      message: 'Привет, как дела?',
      time: '11:00',
      unread: 400,
      active: false
    },
    {
      avatar: contactAvatar,
      name: 'Максим',
      message: 'Привет, как дела?',
      time: '11:00',
      unread: 400,
      active: false
    },
    {
      avatar: contactAvatar,
      name: 'Влад',
      message: 'Привет, как дела?',
      time: '11:00',
      unread: 400,
      active: false
    },
    {
      avatar: contactAvatar,
      name: 'Петр',
      message: 'Привет, как дела?',
      time: '11:00',
      unread: 400,
      active: false
    },
  ]);

  const dataBase = getFirestore();
  const userDataRef = collection(dataBase, "userData");

  let userId = 0;

  const getUserId = () => {

  }

  const getContacts = async () => {
    console.log(uid);

    const docData = {
     displayName: user.displayName,
    };
    await setDoc(doc(dataBase, "userData", uid), docData);
  }

  useEffect(() => {
    if (uid !== '') {
      getContacts();
    }
  }, [uid]);

  // const handleClick = (e, index) => {
  //   // contacts[index].active = true;

  //   console.log(contacts[0]);
  //   console.log(index);
  // }

  return (
    <section className='shadow-sectionShadow relative'>
      {/* Заголовок */}
      <div className='flex flex-col px-8 pt-6 gap-4'>
        <h1 className='text-primary text-2xl font-semibold'>Чаты</h1>

        <form>
          <div className='flex flex-row items-center gap-2 w-72 py-3 px-3 rounded bg-placeholder'>
            <i className="ri-search-line text-primary"></i>
            <input 
              type="text" 
              className={`text-primary bg-placeholder focus:outline-none`}
              placeholder='Поиск'
            />
          </div>
        </form>
      </div>

      {/* Контакты */}
      <div className='mt-8'>
        {contacts.map((contact, index) => (
          <Contact 
            contact={contact}
            key={index} // Исправить!!
            // onClick={handleClick(index)}
          />
        ))}
      </div>

      {/* Добавить контакт */}
      <div className='absolute right-5 bottom-10 text-white bg-secondary rounded-full px-4 py-3
        hover:bg-white hover:text-secondary duration-300 cursor-pointer'
      >
      <i className="ri-add-fill text-3xl"></i>
      </div>
    </section>
  );
}

export default Contacts;
