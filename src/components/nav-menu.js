import React  from 'react';
import './nav-menu.css';

const menuItems = [
  { label: 'About', path: '/about' },
  { label: 'Connect', path: '/connect' },
  { label: 'Listen', path: '/' }
];

const createMenuItem = (item) => {
  return (
    <li className="nav-menu-item" key={item.label}>
      {item.label}
    </li>
  );
};

const navMenu = () => {
  return (
    <div className="card nav-menu">
      <ul className="menu-list">
        {menuItems.map(item => createMenuItem(item))}
      </ul>
    </div>
  );
}

export default navMenu;
