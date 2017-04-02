"use strict";

(function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
			}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
				var n = t[o][1][e];return s(n ? n : e);
			}, l, l.exports, e, t, n, r);
		}return n[o].exports;
	}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
		s(r[o]);
	}return s;
})({ 1: [function (require, module, exports) {
		var app = angular.module('DesignPortfolio', []);

		var controllers = [require('./controllers/process'), require('./controllers/strategy'), require('./controllers/work'), require('./controllers/usability')];

		for (var i = 0; i < controllers.length; i++) {
			app.controller(controllers[i].name, controllers[i].task);
		}

		var services = [require('./services/app')];

		for (var _i = 0; _i < services.length; _i++) {
			app.factory(services[_i].name, services[_i].task);
		}
	}, { "./controllers/process": 2, "./controllers/strategy": 3, "./controllers/usability": 4, "./controllers/work": 5, "./services/app": 6 }], 2: [function (require, module, exports) {
		module.exports = {
			name: 'Process',
			task: function task($scope, App) {

				$scope.id = '01';
				$scope.header = 'My UX Process';
			}
		};
	}, {}], 3: [function (require, module, exports) {
		module.exports = {
			name: 'Strategy',
			task: function task($scope, App) {

				$scope.id = '04';
				$scope.header = 'Winning Strategy';
			}
		};
	}, {}], 4: [function (require, module, exports) {
		module.exports = {
			name: 'Usability',
			task: function task($scope, App) {

				$scope.id = '03';
				$scope.header = 'Usability Testing';
			}
		};
	}, {}], 5: [function (require, module, exports) {
		module.exports = {
			name: 'Work',
			task: function task($scope, App) {

				$scope.id = '02';
				$scope.header = 'Design Samples';

				$(document).on('ready', function () {
					$(".portfolio").slick({
						dots: true,
						infinite: true,
						centerMode: true,
						slidesToShow: 3,
						slidesToScroll: 3,
						centerPadding: '0',
						speed: 300,
						variableWidth: false,
						responsive: [{
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}]
					});
				});
			}
		};
	}, {}], 6: [function (require, module, exports) {
		module.exports = {
			name: 'App',
			task: function task($http) {
				return {};
			}
		};
	}, {}] }, {}, [1]);