import React, { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router';
import { getRoutes } from '../routes';

const loading = (
	<div className="pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse"></div>
	</div>
);

export default function Content() {
	return (
		<main style={{ backgroundColor: '#1f1f23', color: 'white', minHeight: '100vh' }}>
			<Container>
				<Suspense fallback={loading}>
					<Switch>
						{getRoutes().map((route, idx) => {
							return (
								route.component && (
									<Route
										key={idx}
										path={route.path}
										exact={route.exact}
										name={route.name}
										render={(props) => <route.component {...props} />}
									/>
								)
							);
						})}
					</Switch>
				</Suspense>
			</Container>
		</main>
	);
}
