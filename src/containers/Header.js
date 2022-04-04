import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/auth.actions';

export default function Header() {
	const dispatch = useDispatch();

	return (
		<Navbar expand="lg" className="navigation-bar">
			<Container className="header">
				<Navbar.Brand href="/" className="header__logo">
					Shows Tracker
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className="header__toggle" style={{ color: 'white' }} />
				<Navbar.Collapse title="Dropdown" id="basic-navbar-nav" style={{ width: '100%' }}>
					<Nav className="header__nav">
						<Link to="/" className="header__nav-item">
							Home
						</Link>
						<Link to="/favorites" className="header__nav-item">
							Favorites
						</Link>
						<Link to="/viewed" className="header__nav-item">
							Viewed
						</Link>
						<Button type="submit" onClick={() => dispatch(logout())}>
							Logout
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
