import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from '../../../actions/auth.actions';

export default function Login() {
	const dispatch = useDispatch();
	const [inputs, setInputs] = useState({
		username: '',
		password: ''
	});
	const { loggedIn } = useSelector((state) => state.authReducer);
	

	function handleChange(e) {
		const { name, value } = e.target;

		setInputs((inputs) => ({ ...inputs, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(login(inputs.username, inputs.password));
	}
	

	if (loggedIn) {
		return <Redirect to="/" />;
	}

	return (
		<div className="login-page">
			
			<Form className="login-page__form">
				<Form.Group className="mb-3">
					<Form.Label>Username</Form.Label>
					<Form.Control type="username" placeholder="Enter username" name="username" onChange={handleChange} />
					<Form.Text className="text-muted">Enter your TMDB user credentials</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Enter password" name="password" onChange={handleChange} />
				</Form.Group>

				<Button variant="primary" type="submit" onClick={handleSubmit}>
					Login
				</Button>
			</Form>
		
		</div>
	);
}
