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
    console.log(user)

    return (
      <nav className="nav collapsible">
        <img src={logo} alt="" />
        <svg className="icon icon--white menu">
          <use onClick={this.handleCollapsible} href={`${sprite}#menu`}></use>
        </svg>
        <ul className="list nav__list collapsible__content">
          <li className="nav__item">
            <NavLink className="nav__anchor" to="/">
              Home
            </NavLink>
          </li>
          {user && (
            <React.Fragment>
              <li className="nav__item">
                <NavLink className="nav__anchor" to="/schools">
                  Schools
                </NavLink>
              </li>
              {user.isAdmin && (
                <li className="nav__item">
                  <NavLink className="nav__anchor" to="/students/list">
                    Students
                  </NavLink>
                </li>
              )}
              <li className="nav__item">
                <NavLink className="nav__anchor" to="/profile">
                  {user.name}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__anchor" to="/logout">
                  Logout
                </NavLink>
              </li>
            </React.Fragment>
          )}
          {!user && <React.Fragment>
            <li className="nav__item">
              <NavLink className="nav__anchor" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__anchor" to="/register">
                Register
              </NavLink>
            </li>
          </React.Fragment>}
        </ul>
      </nav>
    )
  }
}

export default NavigationBar
