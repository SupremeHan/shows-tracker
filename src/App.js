import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const loading = (
	<div className="pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse"></div>
	</div>
);

//Containers
const Layout = React.lazy(() => import('./containers/Layout'));

//Pages
const Page404 = React.lazy(() => import('./views/pages/404/Page404'));
const Login = React.lazy(() => import('./views/pages/login/Login'));

function App() {
	return (
		<HashRouter>
			<React.Suspense fallback={loading}>
				<Switch>
					<Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
					<Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
					<Route path="/" name="Main" render={(props) => <Layout {...props} />} />
				</Switch>
			</React.Suspense>
		</HashRouter>
	);
}

export default App;
