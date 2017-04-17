'use strict';

;(function () {

    angular
        .module('darkRoom.authorization')
        .service('SessionService', SessionService);

    SessionService.$inject = ['$injector', '$sessionStorage'];

    function SessionService($injector, $sessionStorage) {

        this.checkAccess = function (event, toState, toParams, fromState, fromParams) {
            var $scope = $injector.get('$rootScope');
                // $sessionStorage = $injector.get('$sessionStorage');
            debugger;
            if (toState.data !== undefined) {
                if (toState.data.noLogin !== undefined && toState.data.noLogin) {
                    // если нужно, выполняйте здесь какие-то действия
                    // перед входом без авторизации
                    // $scope.$state.go('list');
                }
            } else {
                // вход с авторизацией
                debugger;
                if ($sessionStorage.user) {
                    $scope.$root.user = $sessionStorage.user;
                } else {
                    // если пользователь не авторизован - отправляем на страницу авторизации
                    event.preventDefault();
                    $scope.$state.go('auth');
                }
            }
        };
    };

})();