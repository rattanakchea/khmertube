'use strict';
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
		selectedVideo: {},
	}

	return YoutubeService;
});