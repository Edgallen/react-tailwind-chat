import React from 'react';
import avatarImg from '../../images/avatar.png';

const ChatTitle = () => {
  return (
    <div>
      {/* Header */}
      <div className='flex flex-row items-center justify-between py-5 px-5 shadow-titleShadow'>
        {/* User */}
        <div className='flex flex-row'>
          <img 
            className='w-12 h-12 rounded-full'
            src={avatarImg} 
            alt="Avatar" 
          />

          <div className='flex flex-col ml-5'>
            <h1 className='text-primary text-xl font-medium'>Имя Пользователя</h1>
            <h2 className='text-inActive text-sm'>Последний раз в сети</h2>
          </div>
        </div>
        {/* Utility */}
        <div className='flex flex-row gap-8 mr-10'>
          <i className="ri-search-line text-2xl cursor-pointer text-primary hover:text-secondary duration-300"></i>
          <i className="ri-more-2-fill text-2xl cursor-pointer text-primary hover:text-secondary duration-300"></i>
        </div>

      </div>
    </div>
  );
}

export default ChatTitle;
