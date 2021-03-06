import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../../services/authService';

const ProtectedRoute = ({ path, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (auth.getCurrentUser()) return <Redirect to="/" />;
				return <Component {...props} />;
			}}
		/>
	);
};

export default ProtectedRoute;
