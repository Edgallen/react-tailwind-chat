import React, { useState, useEffect } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Notification from '../components/Notification/Notification';
import {
    showEmailError,
    showPasswordError,
    hideEmailError,
    hidePasswordError
} from '../services/actions/auth';
import { showNotification } from '../services/actions/modal';

export const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth();

    const notification = useSelector(store => store.notification.modal.notification);
    const data = useSelector(store => store.auth)
    const [ inputs, setInputs ] = useState({
        email: '',
        password: ''
    });

    const standardRegister = async (e) => {
        e.preventDefault();
        if (inputs.email === '') {
            dispatch(showEmailError('Введите почту'));
            return
        } else if (inputs.password === '') {
            dispatch(showPasswordError('Введите пароль'));
            return
        }

        await createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
            .catch((error) => {
                console.log(error.code)
                if (error.code === 'auth/invalid-email') {
                    dispatch(showEmailError('Некорректная почта'));
                } else if (error.code === 'auth/email-already-in-use') {
                    dispatch(showEmailError('Почта уже занята'));
                } else if (error.code === 'auth/weak-password') {
                    dispatch(showPasswordError('Слабый пароль'));
                } else {
                    dispatch(showNotification)
                }
            });
    };

    const changeLogin = (e) => {
        e.preventDefault();
        dispatch(hideEmailError());
        setInputs({...inputs, email: e.target.value})
    };

    const changePassword = (e) => {
        e.preventDefault();
        dispatch(hidePasswordError());
        setInputs({...inputs, password: e.target.value})
    };

    const toLoginPage = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <>
            <section className='w-screen h-screen flex flex-col justify-center items-center bg-background'>
                <div className='w-96 flex flex-col bg-card rounded items-center text-primary'>
                    <h1 className='text-center text-2xl my-6 font-semibold' >Регистрация</h1>

                    <form
                        className='flex flex-col mb-9 gap-5'
                        onSubmit={standardRegister}
                    >

                        <div className='flex flex-col gap-1'>
                            <h2 className='font-medium'>Почта</h2>
                            <input
                                type="text"
                                className={`w-72 py-3 px-3 rounded bg-placeholder border-2
                    focus:outline-none ${data.wrongEmail.state ? 'border-wrongInput' : 'border-transparent'}`}
                                placeholder='Введите почту'
                                onChange={changeLogin}
                            />
                            {data.wrongEmail.state && <p className="text-wrongInput text-base focus:font-normal">{data.wrongEmail.message}</p>}
                        </div>

                        <div className='flex flex-col gap-1'>
                            <h2 className='font-medium'>Пароль</h2>
                            <input
                                type="password"
                                className={`w-72 py-3 px-3 rounded bg-placeholder border-2
                    focus:outline-none ${data.wrongPassword.state ? 'border-wrongInput' : 'border-transparent'}`}
                                placeholder='Введите пароль'
                                onChange={changePassword}
                            />
                            {data.wrongPassword.state && <p className="text-wrongInput text-base focus:font-normal">{data.wrongPassword.message}</p>}
                        </div>

                        <button
                            className='text-white font-semibold mt-6 py-3 bg-secondary rounded
                hover:bg-white hover:text-secondary duration-300'
                        >
                            Зарегистрироваться
                        </button>

                    </form>
                </div>

                <p className='mt-5 text-primary'>Уже есть аккаунт?
                    <span
                        className='text-secondary cursor-pointer hover:text-primary duration-300'
                        onClick={toLoginPage}
                    > Войти</span>
                </p>
            </section>
            {notification && <Notification />}
        </>
    );
};
