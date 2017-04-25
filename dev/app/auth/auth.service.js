'use strict';

;(function () {

    angular
        .module('darkRoom.auth')
        .factory('authServiceFactory', authServiceFactory);


    authServiceFactory.$inject = [ '$firebaseAuth' ];


    function authServiceFactory($firebaseAuth) {


        var firebaseAuthObject = $firebaseAuth();

        var _service = {
            firebaseAuthObject: firebaseAuthObject,
            login: _login,
            logout: _logout,
            register: _register
        };

        return _service;

        function _login(user) {
            return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
        };

        function _register(user) {
            return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password);
        };

        function _logout() {
            firebaseAuthObject.$signOut();
        };


    };

})();