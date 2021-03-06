import React, {useState, useEffect} from 'react';
import facebookIcon from '../images/facebook-icon.svg';
import googleIcon from '../images/google-icon.svg';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";
import Notification from '../components/Notification/Notification';
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
  showEmailError,
  showPasswordError,
  hideEmailError,
  hidePasswordError
} from '../services/actions/auth';
import { showNotification, hideNotification } from '../services/actions/notification';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  const data = useSelector(store => store.auth)
  const notification = useSelector(store => store.notification);
  const [ inputs, setInputs ] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    dispatch(hideEmailError());
    dispatch(hidePasswordError()); 
    dispatch(hideNotification());
  }, []);

  const standardLogin = async (e) => {
    e.preventDefault();
    if (inputs.email === '') {
      dispatch(showEmailError('Введите почту'));
      return
    } else if (inputs.password === '') {
        dispatch(showPasswordError('Введите пароль'));
        return
    }

    await signInWithEmailAndPassword(auth, inputs.email, inputs.password)
        .catch((error) => {
          console.log(error.code)
          if (error.code === 'auth/wrong-password') {
            dispatch(showPasswordError('Неправильная пароль'));
          } else if (error.code === 'auth/invalid-email') {
            dispatch(showEmailError('Неправильная почта'));
          } else if (error.code === 'auth/user-not-found') {
            dispatch(showEmailError('Пользователь не найден'));
          } else {
            dispatch(showNotification({message: 'Произошла ошибка', color: 'bg-notification'})); 
          }
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
    dispatch(hideEmailError());
    setInputs({...inputs, email: e.target.value});
  }

  const changePassword = (e) => {
    e.preventDefault();
    dispatch(hidePasswordError());
    setInputs({...inputs, password: e.target.value});
  }

  const toRegisterPage = (e) => {
    e.preventDefault();
    navigate('/register');
  }

  const toForgotPasswordPage = (e) => {
    e.preventDefault();
    navigate('/forgot-password');
  }

  return (
    <>
      <section className='w-screen h-screen overflow-hidden flex flex-col justify-center items-center bg-background'>
        <div className='w-96 flex flex-col bg-card rounded items-center text-primary'>
          <h1 className='text-center text-2xl my-6 font-semibold' >Войти с помощью</h1>
          <div className='flex w-fill flex-row gap-3 justify-center'>

            <button
              className='flex flex-row w-36 basis-auto justify-center rounded gap-1 px-5 py-3 bg-placeholder hover:bg-card-secondary duration-300'
              onClick={googleLogin}
            >
              <img className='max-h-6' src={googleIcon} alt='google icon'></img>
              <p className='font-medium'>Google</p>
            </button>

            <button
              className='flex flex-row w-36 basis-auto justify-center rounded gap-1 px-5 py-3 bg-placeholder hover:bg-card-secondary duration-300'
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
                className={`w-72 py-3 px-3 rounded bg-placeholder border-2
                  focus:outline-none ${data.wrongEmail.state ? 'border-wrongInput' : 'border-transparent'}`}
                placeholder='Введите почту'
                value={inputs.email}
                onChange={changeEmail}
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
              {data.wrongPassword.state && <p className="text-wrongInput text-base">{data.wrongPassword.message}</p>}
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
          > Зарегистрироваться</span>
        </p>

        <p className='mt-2 text-primary'>Забыли пароль?
          <span
            className='text-secondary cursor-pointer hover:text-primary duration-300'
            onClick={toForgotPasswordPage}
          > Восстановить</span>
        </p>
      </section>
      {notification.isVisible && <Notification />}
    </>
  );
}
