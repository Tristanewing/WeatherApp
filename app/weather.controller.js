(function() {
	'use strict';

	angular
	.module('myApp')
	.controller('WeatherController', WeatherController);

	WeatherController.$inject = ['WeatherFactory'];

	/* @ngInject */
	function WeatherController(WeatherFactory) {
		var vm = this;
		vm.title = 'WeatherController';
		vm.getWeather = getWeather;
		vm.history=[];

		activate();

        ////////////////
        function activate(){
        	
        }

        function getWeather() {

        	WeatherFactory.getWeather(vm.location).then(function(response){

        		vm.weather = response.data;

        		vm.name= response.data.name;

        		vm.temp= response.data.main.temp * 9/5 + 32;

        		vm.pressure= response.data.main.pressure

        		vm.humidity=response.data.main.humidity;

        		vm.tempMin=response.data.main.temp_min * 9/5 + 32;

        		vm.tempMax=response.data.main.temp_max * 9/5 + 32;

        		vm.wind= response.data.wind.speed;



        		vm.history.push(vm.name);


        	})
        }
    }
})();



