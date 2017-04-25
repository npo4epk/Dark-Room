'use strict';

;(function () {


    angular
        .module('darkRoom.auth')
        .component('auth', {
            templateUrl: 'app/auth/views/auth.template.html',
            controller:  AuthController
        });


    AuthController.$inject = ['authServiceFactory'];


    function AuthController(authServiceFactory) {


        var self = this;

        self.user = {
            email: 'admin@admin.com',
            password: '123456'
        };

        self.login = login;
        self.register = register;

        function login(user) {

            return authServiceFactory.login(user)
                .then(function () {
                    debugger;
                })
                .catch(function (error) {
                    debugger;
                });

        };

        function register(user) {

            return authServiceFactory.register(user)
                .then(function () {
                    debugger;
                })
                .catch(function (error) {
                    debugger;
                });

        };


    };


})();