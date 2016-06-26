(function(){
  'use strict';

  angular
       .module('players')
       .config(Config);

  Config.$inject = ['$mdThemingProvider'];
  function Config($mdThemingProvider){
	$mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
	$mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
	$mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
	$mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
  }
})();
