import React from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="w-full shadow-md z-50">
      <TopBar />
      <NavBar />
    </header>
  );
};

export default Header;
