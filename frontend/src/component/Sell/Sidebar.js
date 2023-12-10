import React from 'react';
import './sidebar.css';
import logo from '../../images/sastomandu.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
    </div>
  );
};

export default Sidebar;
