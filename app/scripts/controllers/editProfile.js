'use strict';

angular.module('angularPluraltutApp')
  .controller('EditProfileCtrl', function ($scope, gravatarUrlBuilder) {
		$scope.user = {
			img: 'http://gravatar.com/avatar/a2841c60b188dc2522930733b48d84f3.jpg?s=200'
		};

		$scope.getGravatarURL = function (email) {
			return gravatarUrlBuilder.buildGravatarUrl(email);
		};

	});