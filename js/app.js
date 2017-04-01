const app = angular.module('DesignPortfolio', []);

const controllers = [
	require ('./controllers/process'),
	require ('./controllers/visual'),
	require ('./controllers/bibliocache'),
	require ('./controllers/blogads'),
];

for(let i=0; i<controllers.length; i++) {
	app.controller(controllers[i].name, controllers[i].task);
}

const services = [
	require ('./services/app'),
];

for(let i=0; i<services.length; i++) {
	app.factory(services[i].name, services[i].task);
}