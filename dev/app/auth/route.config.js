'use strict';

;(function () {


    angular
        .module('darkRoom.auth')
        .config(routeConfig);


    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];


    function routeConfig($stateProvider, $urlRouterProvider) {


        $stateProvider
            .state('auth', {
                url: '/auth',
                template: '<auth></auth>'
            });


    };


})();