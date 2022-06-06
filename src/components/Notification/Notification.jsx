import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import closeIcon from '../../images/close-icon.svg';

const Notification = (message) => {
  const [state, setState] = useState({
    render: false
  });

  useEffect(() => {
    setState({...state, render: true});
  }, []);

  const closeNotification = (e) => {
    e.preventDefault();
    setState({...state, render: false});
  }

  return ReactDOM.createPortal (
    <section 
      className={`absolute h-10 overflow-hidden flex items-center justify-center bg-notification bottom-0 duration-500
      w-screen ${!state.render ? 'translate-y-10' : ''}`}>
      <h1 className='text-white text-lg tracking-wide font-medium'>{message}</h1>
      <img 
        className='absolute right-0 h-9 cursor-pointer'
        src={closeIcon}
        alt={'close icon'}
        onClick={closeNotification}
        >
      </img>
    </section>, document.getElementById('notification')
  );
}

export default Notification;