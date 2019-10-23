import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayMenu: false,
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
  }
  showDropdownMenu(event) {
  event.preventDefault();
  this.setState({ displayMenu: !this.state.displayMenu });
  }
  render() {
    return (
      <div className="header">
        <Link className="home-link" to="/">
          <h1 className="title">Outfit Creator</h1>
        </Link>
        <div className="nav-bar">
          <Link className="nav-link" to="/clothing">
            <div className="link-button">Clothing</div>
          </Link>
          <Link className="nav-link" to="/outfits">
            <div className="link-button">Outfits</div>
          </Link>
          <div className="dropdown">
            <div className="create-button" onClick={this.showDropdownMenu}>Create</div>
          { this.state.displayMenu ? (
            <div className="dropdown-content">
              <Link to="/create-clothing"><div>Clothing</div></Link>
              <Link to="/create-outfit"><div>Outfit</div></Link>
            </div>
          ):(null)}
          </div>
        </div>
      </div>
    );
  }
}


export default Header;
