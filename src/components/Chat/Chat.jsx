import React, {useState, useEffect} from 'react';
import ChatInput from '../ChatInput/ChatInput';
import ChatTitle from '../ChatTitle/ChatTitle';
import { useSelector } from 'react-redux';

const Message = ({user, type, text}) => {
  const style = user ?
  'flex flex-row ml-auto bg-secondary'
  :
  'flex flex-start';

  return (
    <div className={`bg-placeholder text-[#F2F2F2] w-max rounded my-2 py-3 px-3 ${style}`}>
      <p>{text}</p>
    </div>
  )
}

const Chat = () => {
  const userAuth = useSelector(store => store.auth);

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

  return (
    <section className='w-4/5 h-[100vh]'>
      <ChatTitle />

      <div className='flex flex-col-reverse pb-8 mx-36 h-[75vh] relative'>
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
