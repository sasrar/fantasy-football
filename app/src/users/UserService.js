(function(){
  'use strict';

  angular.module('players')
         .service('playersService', PlayersService);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  PlayersService.$inject = ['$q', '$http'];
  function PlayersService($q, $http){
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

            return $http.get('http://www.fantasyfootballnerd.com/service/players/json/'+ key +'/WR/').then(function(response) {
              console.log(response);
              return response.data;
            });
          });

      return promise;
    }
  }

})();
