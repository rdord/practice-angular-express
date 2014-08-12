'use strict';

angular.module('angularPluraltutApp')
  .controller('EditEventCtrl', function ($scope, $locale) {
    $scope.cancleEdit = function () {
      window.location = '/';
    };

	  $scope.saveEdit = function (event, newEventForm) {
			if(newEventForm.$valid) {
				window.alert('Event ' + event.name + ' saved!');
			}

			console.log(newEventForm);
		};

		$scope.nowDate = Date.now();
		$scope.slFormat = $locale.DATETIME_FORMATS.custom;
	});