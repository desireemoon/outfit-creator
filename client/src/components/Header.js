import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrolled: false,
      displayMenu: false,
    };
  }
  componentDidMount = async () => {
    window.addEventListener('scroll', () => {
      const top = window.scrollY < 100;
      if (top !== true) {
        this.setState({scrolled: true})
      } else {
        this.setState({scrolled: false})
      }
    })
  }
  // componentWillUnmount = async () => {
  //   window.removeEventListener('scroll');
  // }
  showDropdownMenu = (event) => {
    event.preventDefault();
    this.setState({ displayMenu: !this.state.displayMenu });
    document.addEventListener('click', this.closeMenu);
  }
  closeMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }
  render() {
    return (
      <div className= {this.state.scrolled ? 'header scrolled' : 'header'}>
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
