'use strict';

var app = app || {};

app.controller('MenuCtrl', function ($scope, $routeParams, YoutubeService, $sce) {
	$scope.videos = YoutubeService.init;
	$scope.channels = global.channels;

	$scope.queryChannel = function(playlistId){
		//clear exisitng video
		if ($scope.videos.length > 0) {
			$scope.videos.length = 0;			
		};
		YoutubeService.queryByChannel(playlistId).then(function(data){
			console.log('query by channel..:');
			console.log(data.data.items);
			$.each(data.data.items, function(index, item){
				//$scope.videos.push
				var object = {
					'videoId': item.snippet.resourceId.videoId,
					'img': item.snippet.thumbnails.high.url,
					'title': item.snippet.title
				};

				$scope.videos.push(object);
			});
		});
	};
	if($routeParams.channelId) {
		console.log($routeParams.channelId);
		$scope.queryChannel($routeParams.channelId);	
	}
	
	//YoutubeService create a reference to selected video
	$scope.setSelectedVideo = function(video){
		YoutubeService.selectedVideo = video;
	};


});