const app = angular.module('DesignPortfolio', []);

const controllers = [
	require ('./controllers/process'),
	require ('./controllers/strategy'),
	require ('./controllers/work'),
	require ('./controllers/usability'),
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