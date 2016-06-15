(function(){
  'use strict';

  angular.module('players')
         .service('playerService', PlayerService);

  /**
   * Players DataService
   * Uses embedded, uses fantasyfootballnerd; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  PlayerService.$inject = ['$q', '$http'];
  function PlayerService($q, $http){
    var service = {
      getApiKey: getApiKey,
      loadAllPlayers: loadAllPlayers
    };

    return service;
    
    ////////////

    function getApiKey() {
      var promise = $http.get('config.json').then(function(response) {
          return response.data;
        });

      return promise;
    }

    function loadAllPlayers() {
      var promise = getApiKey()
          .then( function( data ) {
            self.key = data.apiKey;

            // Use new fantasy football api to get player news.
            // Currently not able to use Post request using header. Browser issue.
            //return $http.get('https://api.fantasydata.net/nfl/v2/JSON/FantasyPlayers').then(function(response) {
            return $http.get('http://localhost:4567/FantasyPlayers').then(function(response) {
              console.log(response);
              return response.data;
            });
          });

      return promise;
    }
  }

})();
