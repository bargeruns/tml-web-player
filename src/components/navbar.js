import React from 'react';

import './navbar.css';

const navBar = (props) => {
  return (
    <nav className="navbar" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        TML
      </a>

      <button className="button navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div className="navbar-menu">
      <div className="navbar-end">
        <a href="/listen" className="navbar-item callout">Listen!</a>
        <a href="/about" className="navbar-item link">Learn More</a>
        <a href="/support" className="navbar-item link">Support the Show</a>
      </div>
    </div>
  </nav>
  );
}

export default navBar;
