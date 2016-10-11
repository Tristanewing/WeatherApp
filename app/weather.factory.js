(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('WeatherFactory', WeatherFactory);

    WeatherFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function WeatherFactory($http, $q) {
        var service = {
            getWeather: getWeather
        };
        return service;

        ////////////////

        function getWeather(location) {

        	var defer = $q.defer();

        	$http({
        		method: 'GET',
        		url : 'http://api.openweathermap.org/data/2.5/weather',
        		params :{
        			APPID : 'ae0b25ee90ef00691f2bbc35460bd37e',
        			q: location
        		}
        	})
        	.then(
        	function(response) {
        		if(typeof response==='object'){
        			defer.resolve(response);
        		}
        		//here you will resolve your data response
        	},
        	function(err) {
        		//here you will reject response if err returned
        		defer.reject(err);
        	});

        	return defer.promise;
        }
    }
})();
