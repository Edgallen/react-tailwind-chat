import React from 'react';
import {getAuth, signOut} from "firebase/auth";
import 'remixicon/fonts/remixicon.css'
import avatarImg from '../../images/avatar.png';

const Navbar = () => {
  const auth = getAuth();

  const userSignOut = async (e) => {
    e.preventDefault();
    await signOut(auth);
  }
  return (
    <nav className='flex flex-col float-left w-24 items-center justify-between h-screen py-8 bg-background'>
      <img 
        className='w-14 h-14 p-[3px] rounded-full bg-gradient-to-r from-online-first to-online-second'
        src={avatarImg} 
        alt="Avatar" 
      />
      <i 
        className="ri-logout-box-line text-primary text-2xl cursor-pointer hover:text-secondary duration-300"
        onClick={userSignOut}
      >
      </i>
    </nav>
  );
}

export default Navbar;
