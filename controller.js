var twitterApp = angular.module('twitterApp', []);
	
	twitterApp.controller('twitterController', function($scope, $http){
		var url = 'http://ec2-52-34-116-224.us-west-2.compute.amazonaws.com/trump-tweets/?hash=trump&secondHash=women';
		$http.get(url).success(function(trumpData){
			$scope.trumpQuotes = trumpData.statuses;
			// console.log(trumpQuotes);
			// console.log(trumpQuotes.statuses);
			// console.log(trumpQuotes.statuses[0].user.screen_name);
			// console.log(trumpQuotes.statuses[0].text);
			// console.log(trumpQuotes.statuses[0].user.profile_banner_url);


			// $scope.trumpTweets = trumpQuotes;

			// for(i=0;i<$scope.trumpTweets.length;i++){
			// 	$scope.names = (trumpTweets[i].user.screen_name);
			// 	console.log(trumpTweets[i].user.screen_name);
			// 	$scope.texts = (trumpTweets[i].text);
			// 	$scope.image = (trumpTweets[i].user.profile_banner_url);

			});

		});

	





	// });
