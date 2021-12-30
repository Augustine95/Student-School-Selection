import React from 'react';
import { NavLink } from 'react-router-dom';

class NavigationBar extends React.Component {
	render() {
		const { user } = this.props;

		return (
			<nav>
				<ul className="nav">
					<li className="nav__list list">
						<NavLink className="nav-link nav-title" to="/">
							<i className="fa fa-graduation-cap" aria-hidden="true" /> Selection
						</NavLink>
					</li>
					<li className="nav__list list">
						<NavLink className="nav-link" to="/home">
							<i className="fas fa-house-user"></i> Home
						</NavLink>
					</li>
					{user && (
						<React.Fragment>
							<li className="nav__list list">
								<NavLink className="nav-link" to="/schools">
									<i className="fas fa-school"></i> Schools
								</NavLink>
							</li>
							{user.isAdmin &&
								<li className="nav__list list">
									<NavLink className="nav-link" to="/students/list">
										<i className="fas fa-users"></i> Students
									</NavLink>
								</li>
							}
							<li className="nav__list list">
								<NavLink className="nav-link" to="/profile">
									<i className="fas fa-user-graduate"></i> {user.name}
								</NavLink>
							</li>
							<li className="nav__list list">
								<NavLink className="nav-link" to="/logout">
									<i className="fa fa-sign-out" aria-hidden="true" /> Logout
								</NavLink>
							</li>
						</React.Fragment>
					)}
					{!user && (
						<React.Fragment>
							<li className="nav__list list">
								<NavLink className="nav-link" to="/login">
									<i className="fa fa-sign-in" aria-hidden="true" /> Login
								</NavLink>
							</li>
							<li className="nav__list list">
								<NavLink className="nav-link" to="/register">
									<i className="fas fa-registered" /> Register
								</NavLink>
							</li>
						</React.Fragment>
					)}
				</ul>
			</nav>
		);
	}
}

export default NavigationBar;
