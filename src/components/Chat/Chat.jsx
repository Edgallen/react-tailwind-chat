import React from 'react';
import ChatInput from '../ChatInput/ChatInput';
import ChatTitle from '../ChatTitle/ChatTitle';

const Chat = () => {
  return (
    <section className='w-full'>
      <ChatTitle />

      <div className='mx-12 h-5/6'>

      </div>

      <ChatInput />
    </section>
  );
}

export default Chat;
