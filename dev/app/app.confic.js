'use strict';

;(function () {

    angular
        .module('darkRoom')
        .config(RoutesConfig);

        RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

        function RoutesConfig($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('auth');

            $stateProvider
                .state('auth', {
                    url: "/auth",
                    template: "<auth></auth>"
                })
                .state('index', {
                    url: "/index",
                    template: "<index></index>"
                });


        }

})();