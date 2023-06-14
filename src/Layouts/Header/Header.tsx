import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav">
    <span className="navbar-brand">{title}</span>
      <li className="nav-item active">
        <span className="nav-link">Home</span>
      </li>
    </ul>
  </header>
  );
};

export default Header;
