'use strict';
app.constant('API_BASEURL', 'https://www.googleapis.com/youtube/v3/')
.constant('API_KEY', 'AIzaSyBbrsJJld4NamdmdaHIgVp1zDXY7HT_7lM');


//Youtube Service
app.factory('YoutubeService', function($http, API_BASEURL, API_KEY){
	var search = 'search';
	var channels = 'channels';
	var activities = 'activities';
	var channelSections = 'channelSections';
	var playlistItems = 'playlistItems';

	var YoutubeService = {
		queryVideo: function(){
			var config = {
					part: 'snippet',
					q: 'khmer new song',
					key: API_KEY,
					maxResults: 12
			};

			return $http.get(API_BASEURL+search,
				{
					params: config,
					paramSerializer: '$httpParamSerializerJQLike',
					cache: true
				});
		},

		//by channel id
		queryByChannel: function(playlistId){
			var config = {
					part: 'snippet',
					playlistId: playlistId,
					key: API_KEY,
					maxResults: 12
			};
			return $http.get(API_BASEURL+playlistItems,{
				params: config,
				cache: true				
			});
		},

		init: [],  //for array reference
		selectedVideo: {},
	}

	return YoutubeService;
});