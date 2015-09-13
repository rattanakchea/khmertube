'use strict';

var app = app || {};

app.controller('MainCtrl', function ($scope, YoutubeService, $location) {
	$scope.videos = YoutubeService.init;

	$scope.queryVideo = function(){
		if ($scope.videos.length > 0) {
			$scope.videos.length = 0;			
		};
		YoutubeService.queryVideo().then(function(data){
			//console.log('data: ' + data.data.items);
			$.each(data.data.items, function(index, item){
				//$scope.videos.push

				var object = {
					'videoId': item.id.videoId,
					'img': item.snippet.thumbnails.high.url,
					'title': item.snippet.title
				};
				$scope.videos.push(object);

			});
		})
	};
	$scope.queryVideo();

	$scope.setSelectedVideo = function(video){
		YoutubeService.selectedVideo = video;
	};


	// $scope.getMovieById = function(videoId){
	// 	for (var i = 0; i < $scope.videos.length; i++) {
 //            var video = $scope.videos[i];
 //            if (video.videoId == videoId) {
 //                $scope.selectedVideo =  video;
 //            }
 //        }
	// }

});