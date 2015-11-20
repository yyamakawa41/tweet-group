var twitterApp = angular.module('twitterApp', []);
	
	twitterApp.controller('twitterController', function($scope, $http){
		
		$scope.secondHashTrumpQuotes = function(tag){
			var url = 'http://ec2-52-34-116-224.us-west-2.compute.amazonaws.com/trump-tweets/?hash=trump&secondHash='+tag;

			
		$http.get(url).success(function(trumpData){
			$scope.trumpQuotes = trumpData.statuses;
			

			});

		}		
		});

	





