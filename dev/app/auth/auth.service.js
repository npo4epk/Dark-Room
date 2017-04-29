'use strict';

;(function () {

    angular
        .module('ngGandalf.auth')
        .factory('authService', authService);


    authService.$inject = ['$rootScope', '$sessionStorage', '$firebaseAuth', '$state'];

    function authService($rootScope, $sessionStorage, $firebaseAuth, $state) {

        var firebaseAuthObject = $firebaseAuth();

        var _service = {
            firebaseAuthObject: firebaseAuthObject,
            signIn: _signIn,
            signUp: _signUp,
            signOut: _signOut,
            sessionService: _sessionService
        };

        return _service;

        function _signIn(user) {
            return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
        };

        function _signUp(user) {
            return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password);
        };

        function _sessionService(event, toState, toParams, fromState, fromParams) {

            if (toState.data !== undefined) {
                if (toState.data.noLogin !== undefined && toState.data.noLogin) {
                    // если нужно, выполняйте здесь какие-то действия
                    // перед входом без авторизации
                }
            } else {
                // вход с авторизацией
                if ($sessionStorage.user) {
                    // $scope.$root.user = $sessionStorage.user;
                } else {
                    // если пользователь не авторизован - отправляем на страницу авторизации
                    event.preventDefault();
                    $state.go('sign-in');
                }
            }
            ;

        };
        
        function _signOut() {
            return firebaseAuthObject.$signOut();
        }
    };


})();