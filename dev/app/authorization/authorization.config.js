'use strict';

;(function () {

    angular
        .module('darkRoom.authorization')
        .config(RoutesConfig);


    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('auth', {
                url: '/auth',
                template: '<auth></auth>',
                data: {
                    'noLogin': true
                }
            });

    };

})();