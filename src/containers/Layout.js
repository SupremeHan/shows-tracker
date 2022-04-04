import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Header from './Header';
import Content from './Content';

export default function Layout() {
	const { loggedIn } = useSelector((state) => state.authReducer);

	if (!loggedIn) {
		return <Redirect to="/login" />;
	}
	return (
		<div>
			<Header />
			<Content />
		</div>
	);
}
