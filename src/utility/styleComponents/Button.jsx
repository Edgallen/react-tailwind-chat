import React from 'react';

const Button = ({ children }) => {
  return (
    <button 
      className='
        bg-blue-500
        text-white
        font-semibold
        rounded
        px-5
        py-1
        shadow-sm
        shadow-blue-500/50
        hover:bg-white
        hover:text-black
        hover:shadow-cyan-200/50
        duration-300
      '>
      <p>{children}</p>
    </button>
  );
}

export default Button;
