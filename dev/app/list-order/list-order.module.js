'use strict';

;(function () {

    angular
        .module('darkRoom.list-order', [
            'ui.router'
        ])
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('list', {
                url: '/list',
                template: '<list></list>'
            });

    };

})();
