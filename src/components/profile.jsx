import React, { Component } from 'react';
import { toast } from 'react-toastify';
import auth from '../services/authService';
import Card from './card';

export default class profile extends Component {
	render() {
		const { schools } = this.props;

		return (
			<div>
				<h1 className="animate__animated animate__pulse">My Profile</h1>
				<div className="profile">
					<p className="stress">Hello {auth.getCurrentUser().name} !</p>
					<div className="cards">
						{schools.map((school) => <Card key={school._id} label={school.name} />)}
					</div>
				</div>
			</div>
		);
	}
}
