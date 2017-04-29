'use strict';

;(function () {

    angular
        .module('ngGandalf.nav')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tables', {
                url: '/tables',
                template: '<tables></tables>'
            });

    };

})();