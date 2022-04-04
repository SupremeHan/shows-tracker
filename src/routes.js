import React from 'react';

const Main = React.lazy(() => import('./views/pages/main/Main'));
const Favorites = React.lazy(() => import('./views/pages/favorites/Favorites'));
const Viewed = React.lazy(() => import('./views/pages/viewed/Viewed'));
const ShowDetails = React.lazy(() => import('./views/pages/show/ShowDetails'));
const SeasonDetails = React.lazy(() => import('./views/pages/show/SeasonDetails'));

export function getRoutes() {
	let routes = [
		{
			path: '/',
			exact: true,
			name: 'Main',
			component: Main
		},
		{
			path: '/favorites',
			name: 'Favorites',
			component: Favorites
		},
		{
			path: '/viewed',
			name: 'Viewed',
			component: Viewed
		},
		{
			path: '/show/:id',
			name: 'Show',
			component: ShowDetails
		},
		{
			path: '/season/:id/:number',
			name: 'Season',
			component: SeasonDetails
		}
	];

	return routes;
}
