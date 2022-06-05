import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

export const ForgotPassword = () => {
    const [ inputs, setInputs ] = useState({
        email: ''
    });
    const navigate = useNavigate();

    const changeEmail = (e) => {
        e.preventDefault();
        setInputs({...inputs, email: e.target.value})
    }

    const toLoginPage = (e) => {
      e.preventDefault();
      navigate('login');
    };

    return (
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
                            className='w-72 py-3 px-3 rounded bg-placeholder
                focus:outline-none'
                            placeholder='Введите почту'
                            onChange={changeEmail}
                        />
                    </div>

                    <button
                        className='text-white font-semibold mt-6 py-3 bg-secondary rounded
             hover:bg-white hover:text-secondary duration-300'
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
    );
};
