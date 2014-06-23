'use strict';

angular.module('angularPluraltutApp')
	.factory('EventDataService', function($http, $q){
		return {
			getEvent: function () {
					var deferred = $q.defer();

			    $http({method: 'GET', url: '/data/event/1'})
							.success(function (data) {
								deferred.resolve(data);
							})
							.error(function (){
								deferred.reject();
							});

					return deferred.promise;
			  }
		};
	});