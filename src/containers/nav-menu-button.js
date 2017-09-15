import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleNavMenu } from '../actions'
import NavMenu from '../components/nav-menu.js';
import './nav-menu-button.css';

class NavMenuButton extends Component {
  constructor(props) {
    super(props);

    this.toggleNavMenu = this.toggleNavMenu.bind(this);
  }

  toggleNavMenu() {
    this.props.toggleNavMenu(!this.props.showNavMenu);
  }

  renderNavMenu() {
    if (this.props.showNavMenu) {
      return <NavMenu />;
    };

    return null;
  }

  render() {
    return (
      <div>
        <a className="navbar-menu-button" onClick={this.toggleNavMenu}>
          {
            this.props.showNavMenu
            ? <i className="fa fa-close fa-2x"></i>
            : <i className="fa fa-bars fa-2x"></i>
          }
        </a>
        {this.renderNavMenu()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showNavMenu: state.showNavMenu,
  };
};

export default connect(mapStateToProps, { toggleNavMenu })(NavMenuButton);
