'use strict';

var app = app || {};

app.controller('MenuCtrl', function ($scope, YoutubeService) {
	$scope.videos = YoutubeService.init;

	$scope.channels = global.channels;
	console.log($scope.channels);

	$scope.queryChannel = function(playlistId){
		//clear exisitng video
		if ($scope.videos.length > 0) {
			$scope.videos.length = 0;			
		};
		YoutubeService.queryByChannel(playlistId).then(function(data){
			//console.log(data);
			$.each(data.data.items, function(index, item){
				//$scope.videos.push
				var object = {
					'img': item.snippet.thumbnails.high.url,
					'title': item.snippet.title
				};
				$scope.videos.push(object);
			});
		});
	};

	$scope.test = function(data){
		console.log(data);
	}

});