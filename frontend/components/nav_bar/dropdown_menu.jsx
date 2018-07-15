import React from 'react';
import onClickOutside from 'react-onclickoutside';

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleClickOutside(e) {
    this.setState({ menuOpen: false });
  }

  toggleDropdown() {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen
    }));
  }

  render() {

    return (
      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => this.toggleDropdown()}>
          {this.state.menuOpen
            ? <i className="fas fa-angle-up"></i>
            : <i className="fas fa-angle-down"></i>
          }
        </div>

          {this.state.menuOpen
            ? <div className="dropdown-menu">
              <li><a href="#">Your profile</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Switch account</a></li>
              <li><a href="#">Log out</a></li>
              </div>
            : null
          }
      </div>
    );
  }
}

export default onClickOutside(DropdownMenu);
