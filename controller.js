var twitterApp = angular.module('twitterApp', ['ngRoute']);
	
	module.controller('twitterController', function($scope, $http){
		var url = 'http://ec2-52-34-116-224.us-west-2.compute.amazonaws.com/trump-tweets/?hash=trump&secondHash=women';
		$http.get(url).success(function(trumpData){
			$scope.trumpQuotes = trumpData;
		});

	});
