$(document).ready(function(){

	var apiURL = 'https://www.googleapis.com/youtube/v3/search';

	var params = {
		part: 'snippet',
		q: 'khmer new song',
		key: 'AIzaSyBbrsJJld4NamdmdaHIgVp1zDXY7HT_7lM',
		maxResults: 10
	};

	$.get( apiURL, params, 
		function( data ) {
		console.log(data.items);
	});
});