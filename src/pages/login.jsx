import React, {useState} from 'react';
import facebookIcon from '../images/facebook-icon.svg';
import googleIcon from '../images/google-icon.svg';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";
import {useNavigate} from "react-router-dom";

export const Login = () => {
  const [ inputs, setInputs ] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const auth = getAuth();

  const standardLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, inputs.email, inputs.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          console.log(auth);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
  }

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    console.log(user);
  }

  const facebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    const user = await signInWithPopup(auth, provider);
    console.log(user);
  }

  const changeEmail = (e) => {
    e.preventDefault();
    setInputs({...inputs, email: e.target.value})
  }

  const changePassword = (e) => {
    e.preventDefault();
    setInputs({...inputs, password: e.target.value})
  }

  const toRegisterPage = (e) => {
    e.preventDefault();
    navigate('/register');
  }

  const toForgotPasswordPage = (e) => {
    e.preventDefault();
    navigate('/forgotPassword');
  }

  return (
    <section className='w-screen h-screen flex flex-col justify-center items-center bg-background'>
      <div className='w-96 flex flex-col bg-card rounded items-center text-primary'>
        <h1 className='text-center text-2xl my-6 font-semibold' >Войти с помощью</h1>
        <div className='flex w-fill flex-row gap-3 justify-center'>

          <button
            className='flex flex-row w-32 basis-auto justify-center rounded gap-1 px-5 py-3 bg-placeholder hover:bg-card-secondary duration-300'
            onClick={googleLogin}
          >
            <img className='max-h-6' src={googleIcon} alt='google icon'></img>
            <p className='font-medium'>Google</p>
          </button>

          <button
            className='flex flex-row w-32 basis-auto justify-center rounded gap-1 px-5 py-3 bg-placeholder hover:bg-card-secondary duration-300'
            onClick={facebookLogin}
          >
            <img className='max-h-6' src={facebookIcon} alt='facebook icon'></img>
            <p className='font-medium'>Facebook</p>
          </button>

        </div>

        <h3 className='my-5'>или</h3>

        <form
          className='flex flex-col mb-9 gap-5'
          onSubmit={standardLogin}
        >

          <div className='flex flex-col gap-1'>
            <h2 className='font-medium'>Почта</h2>
            <input 
              type="text" 
              className='w-72 py-3 px-3 rounded bg-placeholder
                focus:outline-none'
              placeholder='Введите почту'
              value={inputs.email}
              onChange={changeEmail}
             />
          </div>

          <div className='flex flex-col gap-1'>
            <h2 className='font-medium'>Пароль</h2>
            <input 
              type="password"
              className='w-72 py-3 px-3 rounded bg-placeholder
                focus:outline-none'
              placeholder='Введите пароль'
              onChange={changePassword}
            />
          </div>

          <button
            className='text-white font-semibold mt-6 py-3 bg-secondary rounded
             hover:bg-white hover:text-secondary duration-300'
          >
            Войти
          </button>

        </form>
      </div>

      <p className='mt-5 text-primary'>Еще нет аккаунта?
        <span
          className='text-secondary cursor-pointer hover:text-primary duration-300'
          onClick={toRegisterPage}
        > Зарегестрироваться</span>
      </p>

      <p className='mt-2 text-primary'>Забыли пароль?
        <span
          className='text-secondary cursor-pointer hover:text-primary duration-300'
          onClick={toForgotPasswordPage}
        > Восстановить</span>
      </p>
    </section>
  );
}
