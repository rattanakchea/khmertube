'use strict';

var app = app || {};

app.controller('BrowseCtrl', function ($scope, $routeParams, $location, YoutubeService) {
	$scope.videos = YoutubeService.init;

	if(jQuery.isEmptyObject(YoutubeService.selectedVideo)){
		console.log('empty');
		//query api with videoid params: $routeParams.videoId
		$scope.selectedVideo = {
			videoId: $routeParams.videoId,
			title: 'Default title',
			img: 'https://placehold.it/500x300'
		};

		//if cannot find, redirect somewhere
		//$location.path('#/view/'+ $routeParams.videoId);
	} else {
		$scope.selectedVideo = YoutubeService.selectedVideo;	
	}
	


});