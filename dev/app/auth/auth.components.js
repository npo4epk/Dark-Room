'use strict';

;(function () {

    angular
        .module('ngGandalf.auth')
        .component('signUp', {
            templateUrl: 'app/auth/views/sign-up.template.html',
            controller:  SingUpCtrl
        })
        .component('signIn', {
            templateUrl: 'app/auth/views/sign-in.template.html',
            controller:  SingInCtrl
        });

    SingInCtrl.$inject = ['$rootScope', '$timeout', '$state', 'toaster', 'authService', '$sessionStorage'];

    function SingInCtrl($rootScope, $timeout, $state, toaster, authService, $sessionStorage) {

        if ($sessionStorage.user) {
            $state.go('tables');
        }

        var self = this;

        $rootScope.$state = $state;
        self.signIn = _signIn;

        function _signIn(user) {


            authService.signIn(user)
                .then(function (token) {
                    $sessionStorage.user = token.email;
                    // toaster.pop('success', "Authorization was successful!", "Please wait...");
                    // $timeout(function () {
                    //     toaster.clear();
                        $state.go('tables');
                    // }, 3000);

                })
                .catch(function (error) {
                    // toaster.pop('error', "Error", error.message);
                    // $timeout(function () {
                    //     toaster.clear();
                    // }, 3000);
                });

        };

    };

    SingUpCtrl.$inject = ['$rootScope', '$timeout', '$state', 'toaster', 'AuthService'];

    function SingUpCtrl($rootScope, $timeout, $state, toaster, AuthService) {

        if ($sessionStorage.user) {
            $state.go('nav');
        }

        var self = this;
        $rootScope.$state = $state;
        self.signUp = _signUp;

        function _signUp(user) {

            authService.signUp(user)
                .then(function (firebaseUser) {
                    toaster.pop('success', "Registration was successful!", "Please wait...");
                    $timeout(function () {
                        toaster.clear();
                        $state.go('tables');
                    }, 3000);
                })
                .catch(function (error) {
                    toaster.pop('error', "Error", error.message);
                    $timeout(function () {
                        toaster.clear();
                    }, 3000);
                });
        }

    };


})();