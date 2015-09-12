'use strict';

  var clientId = '899187412338-gnlc09r6n1o0044smv673g22ughh5bsf.apps.googleusercontent.com';
  var apiKey = 'AIzaSyBbrsJJld4NamdmdaHIgVp1zDXY7HT_7lM';
  var scopes = 'https://www.googleapis.com/auth/plus.me';


  function handleClientLoad() {
        // Step 2: Reference the API key
        gapi.client.setApiKey(apiKey);
        //window.setTimeout(checkAuth,1);

        gapi.client.load('youtube', 'v3', function() {
          //handleAPILoaded();
          makeApiCall();
        });
        
      }

      function checkAuth() {
        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
      }

      function handleAuthResult(authResult) {
        var authorizeButton = document.getElementById('authorize-button');
        console.log(authResult);
        if (authResult && !authResult.error) {
          alert("auth success");
          authorizeButton.style.visibility = 'hidden';
          makeApiCall();
        } else {
          alert("auth NOT success");
          authorizeButton.style.visibility = '';
          authorizeButton.onclick = handleAuthClick;
        }
      }

      function handleAuthClick(event) {
        // Step 3: get authorization to use private data
        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
        return false;
      }

      // Load the API and make an API call.  Display the results on the screen.
      function makeApiCall() {
        search();
        
      }

      // Search for a specified string.
      function search() {
        var s = 'khmer new songs';
        var request = gapi.client.youtube.search.list({
          q: 'hello',
          part: 'snippet'
        });

        request.execute(function(response) {
          var str = JSON.stringify(response.result);
          console.log(str);
        });
      }

      //handleClientLoad();

