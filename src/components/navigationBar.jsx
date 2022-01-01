import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './images/logo.svg'
import sprite from './images/sprite.svg'
import menu from './images/menu.svg'
import collapsible from '../utils/collapsible'

class NavigationBar extends React.Component {
  componentDidMount() {
    collapsible.collapse()
  }

  render() {
    const { user } = this.props

    return (
      <nav className="nav collapsible">
        <img src={logo} alt="" />
        <svg className="icon icon--white menu">
          <use onClick={this.handleCollapsible} href={`${sprite}#menu`}></use>
        </svg>
        <ul className="list nav__list collapsible__content">
          <li className="nav__item">
            <a className="nav__anchor" href="/">
              <i className="fa fa-home"></i> Home
            </a>
          </li>
          {user && (
            <React.Fragment>
              <li className="nav__item">
                <a className="nav__anchor" href="/schools">
                  Schools
                </a>
              </li>
              {user.isAdmin && (
                <li className="nav__item">
                  <a className="nav__anchor" href="/students/list">
                    Students
                  </a>
                </li>
              )}
              <li className="nav__item">
                <a className="nav__anchor" href="/profile">
                  <i className="fa fa-user"></i> Profile
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__anchor" href="/logout">
                  <i className="fa fa-sign-out" />
                  Logout
                </a>
              </li>
            </React.Fragment>
          )}
          <li className="nav__item">
            <a className="nav__anchor" href="/login">
              <i className="fa fa-sign-in"></i> Login
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__anchor" href="/register">
              Register
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavigationBar
