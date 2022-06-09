import React, { useState } from 'react';
import contactAvatar from '../../images/contactAvatar.png';
import avatar from '../../images/avatar.png';

const Contact = ({contact, index, click}) => {
  const active = contact.active ? 'bg-secondary text-white' : 'bg-placeholder'

  return (
    <div className={
      `flex flex-row justify-between items-center py-4 mb-1 text-primary cursor-pointer
      ${contact.active ? 'bg-secondary text-white' : 'bg-placeholder'}`}
    >
      <div className='flex flex-row items-center gap-4 ml-2'>
        <img 
          className='w-14 h-14 rounded-full'
          src={contact.avatar} 
          alt="Avatar" 
        />

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
  const [contacts, setContacts] = useState([
    {
      avatar: avatar,
      name: 'Имя Пользователя',
      message: 'Привет, как дела?',
      time: '11:00',
      unread: 400,
      active: false
    },
    {
      avatar: contactAvatar,
      name: 'Имя Пользователя',
      message: 'Привет, как дела?',
      time: '11:00',
      unread: 400,
      active: false
    },
    {
      avatar: contactAvatar,
      name: 'Имя Пользователя',
      message: 'Привет, как дела?',
      time: '11:00',
      unread: 400,
      active: false
    },
    {
      avatar: contactAvatar,
      name: 'Имя Пользователя',
      message: 'Привет, как дела?',
      time: '11:00',
      unread: 400,
      active: false
    },
  ]);

  // const handleClick = (e, index) => {
  //   // contacts[index].active = true;

  //   console.log(contacts[0]);
  //   console.log(index);
  // }

  return (
    <section className='shadow-sectionShadow'>
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
    </section>
  );
}

export default Contacts;
