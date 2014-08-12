'use strict';

angular.module('angularPluraltutApp')
	.filter('durationFilter', function(){
		return function(duration){
			switch(duration){
				case 1:
					return 'half hour';
				case 2:
					return 'one hour';
				case 3:
					return 'half day';
				case 4:
					return 'full day';
			}
		};
	})
	.filter('levelFilter', function () {
		return function (level) {
			switch(level){
				case 'easy':
					return '<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="glyphicon glyphicon-star-empty"></span>';

				case 'intermediate':
					return '<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span></span><span class="glyphicon glyphicon-star-empty"></span>';

				case 'advanced':
					return '<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span></span><span class="glyphicon glyphicon-star"></span>';
			}
		};
	});