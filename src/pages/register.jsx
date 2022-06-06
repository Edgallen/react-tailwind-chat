import React, { useState } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { showNotification } from '../services/actions/notification';
import { useSelector } from 'react-redux/es/exports';
import Notification from '../components/Notification/Notification';

export const Register = () => {
    const notification = useSelector(store => store.notification.notification);
    const [ inputs, setInputs ] = useState({
        email: '',
        password: '',
        wrongEmail: {
            state: false,
            message: ''
        },
        wrongPassword: {
            state: false,
            message: ''
        }
    });
    const navigate = useNavigate();
    const auth = getAuth();
    const dispatch = useDispatch();

    const standardRegister = async (e) => {
        e.preventDefault();
        if (inputs.email === '') {
            setInputs({...inputs, wrongEmail: {...inputs.wrongEmail, state: true, message: 'Введите почту'}});
            return
        } else if (inputs.password === '') {
            setInputs({...inputs, wrongPassword: {...inputs.wrongPassword, state: true, message: 'Введите пароль'}});
            return
        }

        await createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
            .catch((error) => {
                console.log(error.code)
                if (error.code === 'auth/invalid-email') {
                    setInputs({...inputs, wrongEmail: {...inputs.wrongEmail, state: true, message: 'Некорректная почта'}});
                } else if (error.code === 'auth/email-already-in-use') {
                    setInputs({...inputs, wrongEmail: {...inputs.wrongEmail, state: true, message: 'Почта уже занята'}});
                } else if (error.code === 'auth/weak-password') {
                    setInputs({...inputs, wrongPassword: {...inputs.wrongPassword,state: true, message: 'Слабый пароль'}});
                } else {
                    dispatch(showNotification)
                }
            });
    };

    const changeLogin = (e) => {
        e.preventDefault();
        setInputs({...inputs, wrongEmail: {...inputs.wrongEmail, state: false, message: ''}, email: e.target.value})
    };

    const changePassword = (e) => {
        e.preventDefault();
        setInputs({...inputs, wrongPassword: {...inputs.wrongPassword, state: false, message: ''}, password: e.target.value})
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
                    focus:outline-none ${inputs.wrongEmail.state ? 'border-wrongInput' : 'border-transparent'}`}
                                placeholder='Введите почту'
                                onChange={changeLogin}
                            />
                            {inputs.wrongEmail.state && <p className="text-wrongInput text-base focus:font-normal">{inputs.wrongEmail.message}</p>}
                        </div>

                        <div className='flex flex-col gap-1'>
                            <h2 className='font-medium'>Пароль</h2>
                            <input
                                type="password"
                                className={`w-72 py-3 px-3 rounded bg-placeholder border-2
                    focus:outline-none ${inputs.wrongPassword.state ? 'border-wrongInput' : 'border-transparent'}`}
                                placeholder='Введите пароль'
                                onChange={changePassword}
                            />
                            {inputs.wrongPassword.state && <p className="text-wrongInput text-base focus:font-normal">{inputs.wrongPassword.message}</p>}
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
