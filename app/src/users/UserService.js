(function(){
  'use strict';

  angular.module('users')
         .service('userService', UserService);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  UserService.$inject = ['$q', '$http'];
  function UserService($q, $http){
    var service = {
      getApiKey: getApiKey,
      loadAllUsers: loadAllUsers
    };

    return service;
    
    ////////////

    function getApiKey() {
      var promise = $http.get('config.json').then(function(response) {
          return response.data;
        });

      return promise;
    }

    function loadAllUsers() {
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
