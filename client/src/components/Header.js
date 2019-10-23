import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <Link className="home-link" to="/">
        <h1 className="title">Outfit Creator</h1>
      </Link>
      <nav className="nav-bar">
        <Link className="nav-link" to="/clothing">
          <button className="link-button">Clothing</button>
        </Link>
        <Link className="nav-link" to="/outfits">
          <button className="link-button">Outfits</button>
        </Link>
        <Link className="nav-link" to="/create-clothing">
          <button className="link-button">Create Clothing</button>
        </Link>
        <Link className="nav-link" to="/create-outfit">
          <button className="link-button">Create Outfit</button>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
