import React, {useState, useEffect} from 'react';
import ChatInput from '../ChatInput/ChatInput';
import ChatTitle from '../ChatTitle/ChatTitle';
import { collection, getDocs, getFirestore, setDoc, doc, query } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Message = ({user, type, text}) => {
  const style = user ?
  'flex flex-row ml-auto bg-secondary'
  :
  'flex flex-start';

  return (
    <div className={`bg-placeholder text-primary w-max rounded my-2 py-3 px-3 ${style}`}>
      <p>{text}</p>
    </div>
  )
}

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      user: true,
      type: 'text',
      text: 'Привет, как дела?'
    },
    {
      user: false,
      type: 'text',
      text: 'Привет, как дела?'
    },
    {
      user: true,
      type: 'text',
      text: 'Привет, как дела?'
    },
    {
      user: false,
      type: 'text',
      text: 'Привет, как дела?'
    },
    {
      user: true,
      type: 'text',
      text: 'Привет, как дела?'
    },
  ]);

  const dataBase = getFirestore();
  const userDataRef = collection(dataBase, "userData");

  const [data, loading] = useCollectionData(
    query(userDataRef)
  );

  const getCollection = async () => {
    await setDoc(doc(userDataRef, "user1"), {
      contacts: [
          {
            avatar: 'Аватар',
            displayName: 'Имя Пользователя',
            messages: [
              {
                displayName: 'Имя Пользователя',
                type: 'text',
                text: 'Привет, как дела?'
              }
            ]
          }
      ]
    });

    console.log(userDataRef);
    console.log(data);
  }

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <section className='w-4/5'>
      <ChatTitle />

      <div className='flex flex-col-reverse pb-8 mx-36 h-5/6 relative'>
        {messages.map((message, index) => (
          <Message
            key={index} // Исправить !!
            user={message.user}
            type={message.type}
            text={message.text}
          />
        ))}
      </div>

      <ChatInput />
    </section>
  );
}

export default Chat;
