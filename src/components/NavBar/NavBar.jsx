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
    <nav className='flex flex-col float-left w-24 items-center justify-between h-screen py-8 bg-background shadow-sectionShadow'>
      <img 
        className='w-12 h-12 rounded-full'
        src={avatarImg} 
        alt="Avatar" 
      />

      <ul className='flex flex-col items-center w-full'>
        <li className='flex items-center justify-center px-[34px] text-secondary shadow-sectionShadow-active hover:text-primary hover:shadow-primary duration-300' >
          <i 
            className="ri-chat-1-fill text-2xl cursor-pointer hover:text-primary duration-300"
          >
          </i>
        </li>
      </ul>

      <i 
        className="ri-logout-box-line text-primary text-2xl cursor-pointer hover:text-secondary duration-300"
        onClick={userSignOut}
      >
      </i>
    </nav>
  );
}

export default Navbar;

// p-[3px]
// bg-gradient-to-r from-online-first to-online-second
