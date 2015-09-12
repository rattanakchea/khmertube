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
	}

});

//Youtube Service
app.factory('YoutubeService', function($http){
	var apiKey = 'AIzaSyBbrsJJld4NamdmdaHIgVp1zDXY7HT_7lM';
	var api = 'https://www.googleapis.com/youtube/v3/';
	var search = 'search';
	var channels = 'channels';
	var activities = 'activities';
	var channelSections = 'channelSections';
	var playlistItems = 'playlistItems';

	var config = {
		params: {
			part: 'snippet',
			q: 'khmer new song',
			key: apiKey,
			maxResults: 10	
		},
		paramSerializer: '$httpParamSerializerJQLike',
		cache: true
	};

	var YoutubeService = {
		queryVideo: function(){
			return $http.get(api+search, config);
		},

		queryByChannel: function(playlistId){
			
			//var uploadId = global.channels[0].playlist.greenMile;
			//console.log('playlistid: ' + playlistId);
			//console.log('fixed id: '  + uploadId);

			var url = api+ playlistItems;
			console.log(url);
			return $http.get(url, {
				params: {
					part: 'snippet',
					playlistId: playlistId,
					key: apiKey,
					maxResults: 5
			},
			cache: true				
		});
		},

		init: [],
		selectedVideo: {}
	}

	return YoutubeService;
});