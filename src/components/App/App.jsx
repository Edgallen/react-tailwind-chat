import React from 'react';
import Login from '../Login/Login';
import Navbar from '../NavBar/NavBar';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Login />
      </main>
    </>
  );
}

export default App;