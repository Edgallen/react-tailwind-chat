import React from 'react';

const ChatInput = () => {
  return (
    <div className='flex justify-start my-2'>
        <form className='flex flex-row absolute right-0 left-0 px-36'>
          <div className='flex flex-row w-[200vh] items-center relative text-white gap-5 py-3 px-3 rounded bg-placeholder'>
            <i className="ri-user-smile-line text-2xl cursor-pointer hover:text-secondary duration-300"></i>

            <input 
                type="text" 
                className={`text-primary bg-placeholder focus:outline-none`}
                placeholder='Написать сообщение'
              />

            <i className="ri-attachment-2 absolute right-5 text-2xl cursor-pointer hover:text-secondary duration-300"></i>
          </div>
            
          <button 
            className='flex flex-row items-center min-w-[150px] content-center px-5 gap-2 bg-card-secondary rounded 
              text-white font-semibold hover:text-secondary hover:bg-white duration-300'
            >
            <i className="ri-send-plane-fill text-xl pt-[1px]"></i>
            Отправить
          </button>
        </form>
      </div>
  );
}

export default ChatInput;
