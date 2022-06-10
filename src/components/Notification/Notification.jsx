import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import closeIcon from '../../images/close-icon.svg';
import { hideNotification } from '../../services/actions/modal';

const Notification = () => {
  const dispatch = useDispatch();
  const data = useSelector(store => store.modal.notification);
  const [state, setState] = useState({
    render: false,
    closeComponent: false
  });

  const renderRef = useRef(false);

  useEffect(() => {
    setState({...state, render: true});

    const delayedAnimation = setTimeout(() => {
       setState({...state, closeComponent: true, render: renderRef.current})
    }, 7000); 
  }, []);

  useEffect(() => {
    if (state.closeComponent) {
      const delayedClose = setTimeout(() => {dispatch(hideNotification())}, 450);
    };
  }, [state.closeComponent]);

  const closeNotification = (e) => {
    e.preventDefault();
    setState({...state, render: false, closeComponent: true});
  }

  return ReactDOM.createPortal (
    <section 
      className={`absolute h-10 overflow-hidden flex items-center justify-center ${data.color} bottom-0 duration-500
      w-screen ${!state.render ? 'translate-y-10' : ''}`}
      >
      <h1 className='text-white text-lg tracking-wide font-medium'>{data.message}</h1>
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