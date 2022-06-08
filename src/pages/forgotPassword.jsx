import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import Notification from '../components/Notification/Notification';
import { showNotification } from '../services/actions/notification';
import { hideEmailError, showEmailError } from '../services/actions/auth';

export const ForgotPassword = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const notification = useSelector(store => store.notification);
    const data = useSelector(store => store.auth);
    const [ inputs, setInputs ] = useState({
        email: ''
    });

    const changeEmail = (e) => {
        e.preventDefault();
        dispatch(hideEmailError());
        setInputs({...inputs, email: e.target.value})
    }

    const toLoginPage = (e) => {
      e.preventDefault();
      navigate('/login');
    };

    const resetPassword = (e) => {
      e.preventDefault();
      if (inputs.email === '') {
        dispatch(showEmailError('Введите почту'));
        return
      }

      sendPasswordResetEmail(auth, inputs.email)
        .then(() => {
            dispatch(showNotification({message: 'Письмо с инструкциями отправлено', color: 'bg-notification-alt'}));
        })
        .catch((error) => {
            if (error.code === 'auth/invalid-email') {
                dispatch(showEmailError('Такой почты нет в базе'));
            } else {
                dispatch(showNotification({message: 'Произошла ошибка', color: 'bg-notification'}));
            }
        });
    };

    return (
        <>
            <section className='w-screen h-screen flex flex-col justify-center items-center bg-background'>
                <div className='w-96 flex flex-col bg-card rounded items-center text-primary'>
                    <h1 className='text-center text-2xl my-6 font-semibold' >Восстановить пароль</h1>

                    <form
                        className='flex flex-col mb-9 gap-5'
                    >

                        <div className='flex flex-col gap-1'>
                            <h2 className='font-medium'>Почта</h2>
                            <input
                                type="text"
                                className={`w-72 py-3 px-3 rounded bg-placeholder border-2
                    focus:outline-none ${data.wrongEmail.state ? 'border-wrongInput' : 'border-transparent'}`}
                                placeholder='Введите почту'
                                onChange={changeEmail}
                            />
                            {data.wrongEmail.state && <p className="text-wrongInput text-base">{data.wrongEmail.message}</p>}
                        </div>

                        <button
                            className='text-white font-semibold mt-6 py-3 bg-secondary rounded
                hover:bg-white hover:text-secondary duration-300'
                            onClick={resetPassword}
                        >
                            Восстановить
                        </button>

                    </form>
                </div>

                <p className='mt-5 text-primary'>Вспомнили пароль?
                    <span
                        className='text-secondary cursor-pointer hover:text-primary duration-300'
                        onClick={toLoginPage}
                    > Войти</span>
                </p>
            </section>
            {notification.isVisible && <Notification />}
        </>
    );
};
