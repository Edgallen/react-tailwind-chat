import React, { useState } from 'react';

const Contacts = () => {
  const [state, setState] = useState({
    contacts: {
      'Избранные': {
        avatar: '',
        name: ''
      },
      'Сообщения': {
        avatar: '',
        name: ''
      }
    }
  })

  return (
    <section className='px-8 shadow-sectionShadow'>
      <div className='flex flex-col pt-6 gap-4'>
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
    </section>
  );
}

export default Contacts;
