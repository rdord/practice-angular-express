'use strict';

angular.module('angularPluraltutApp')
  .controller('EventCtrl', function ($scope, EventDataService) {

  EventDataService.getEvent().then(function (data) {
		$scope.event = data;
		console.log($scope.event.name + ' - ' + $scope.event.date);
  });
	
/*
  $scope.event.then (function (event) {
		console.log(event);
  }, function (status) {
		console.log(status);
  });*/

  $scope.sortOrder = 'name';

  $scope.voteUp = function (session, event) {
			console.log(event.location.city);
      session.votes++;
    };

  $scope.voteDown = function (session) {
      session.votes--;
    };
});
