import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <Link className="home-link" to="/">
        <h1 className="title">Outfit Creator</h1>
      </Link>
      <nav className="nav-bar">
        <Link className="nav-link" to="/animals">
          <button className="link-button">Clothing</button>
        </Link>
        <Link className="nav-link" to="/random">
          <button className="link-button">Outfits</button>
        </Link>
        <Link className="nav-link" to="/status">
          <button className="link-button">Create Clothing</button>
        </Link>
        <Link className="nav-link" to="/status">
          <button className="link-button">Create Outfit</button>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
