'use strict';

;(function () {

    angular
        .module('darkRoom', [
                'ui.router',
                'ngStorage',
                'darkRoom.authorization',
                'darkRoom.list-order'
        ])
        .run(Run);

    Run.$inject = ['$rootScope', '$state', '$stateParams', 'SessionService'];
    
    function Run($rootScope, $state, $stateParams, SessionService) {

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.user = null;

        // Здесь мы будем проверять авторизацию
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                SessionService.checkAccess(event, toState, toParams, fromState, fromParams);
            }
        );

    };

})();

