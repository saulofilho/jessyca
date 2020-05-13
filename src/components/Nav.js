import React, { Component } from 'react'
import classnames from "classnames";
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import Logo from './Logo'

import './Nav.css'

export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false,
    prevScrollpos: 0,
    visible: true
  }

  componentDidMount = () => {
    this.setState({ currentPath: this.props.location.pathname });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  }


  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })

  render() {
    const { active } = this.state,
      { subNav } = this.props,
      NavLink = ({ to, className, children, ...props }) => (
        <Link
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          {...props}
        >
          {children}
          {console.log(subNav)}
        </Link>
      )

    return (
      <nav 
      className={
        classnames
          ("navbar", 
            {
              "navbar--hidden": !this.state.visible
            },
              `Nav ${active ? 'Nav-active' : ''}`
          )
        }
      >
        <div className="Nav--Container container">
          <Link to="/" onClick={this.handleLinkClick}>
            <Logo />
          </Link>
          <div className="Nav--Links">
            <NavLink to="/sobre/">sobre</NavLink>
            <NavLink to="/projetos/">projetos</NavLink>
            <NavLink to="/pessoas/">pessoas</NavLink>
            <NavLink to="/blog/">blog</NavLink>
            <NavLink to="/contato/">contato</NavLink>
            <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
          >
            X
          </button>
          </div>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
          >
            {active ? <X color='#000' /> : <Menu color='#000' />}
          </button>
        </div>
      </nav>
    )
  }
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
