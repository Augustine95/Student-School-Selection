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

// <nav className="nav">
//   <a href="/">
//     <img src={logo} alt="" />
//   </a>
//   <use className="icon icon--white">
//     <svg href={`${menu}`}></svg>
//   </use>
//   {/* <img className="icon icon--white" src={menu} alt="" /> */}
//   <ul className="list nav__list">
//     <li>
//       <NavLink className="nav-title" to="/">
//         <i className="fa fa-graduation-cap" aria-hidden="true" />{' '}
//         Selection
//       </NavLink>
//     </li>
//     <li>
//       <NavLink to="/home">
//         <i className="fas fa-house-user"></i> Home
//       </NavLink>
//     </li>
//     {user && (
//       <React.Fragment>
//         <li>
//           <NavLink to="/schools">
//             <i className="fas fa-school"></i> Schools
//           </NavLink>
//         </li>
//         {user.isAdmin && (
//           <li>
//             <NavLink to="/students/list">
//               <i className="fas fa-users"></i> Students
//             </NavLink>
//           </li>
//         )}
//         <li>
//           <NavLink to="/profile">
//             <i className="fas fa-user-graduate"></i> {user.name}
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/logout">
//             <i className="fa fa-sign-out" aria-hidden="true" /> Logout
//           </NavLink>
//         </li>
//       </React.Fragment>
//     )}
//     {!user && (
//       <React.Fragment>
//         <li>
//           <NavLink to="/login">
//             <i className="fa fa-sign-in" aria-hidden="true" /> Login
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/register">
//             <i className="fas fa-registered" /> Register
//           </NavLink>
//         </li>
//       </React.Fragment>
//     )}
//   </ul>
// </nav>
