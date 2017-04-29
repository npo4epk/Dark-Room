'use strict';

;(function () {

    angular
        .module('ngGandalf')
        .config(routeConfig)
        .run(runCheckAccess);

    routeConfig.$inject = ['$urlRouterProvider', '$sessionStorageProvider'];

    function routeConfig($urlRouterProvider, $sessionStorageProvider) {
        if ( $sessionStorageProvider.get('user') ) {
            $urlRouterProvider.otherwise("/tables");
        } else {
            $urlRouterProvider.otherwise("/sign-in");
        }
    };

    runCheckAccess.$inject = ['$rootScope', 'authService'];

    function runCheckAccess($rootScope, AuthService) {
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                authService.sessionService(event, toState, toParams, fromState, fromParams);
            }
        );
    };


})();