'use strict';

;(function () {

    angular
        .module('ngGandalf.nav')
        .component('tables', {
            templateUrl: 'app/nav/views/nav.template.html',
            controller:  NavCtrl
        });

    NavCtrl.$inject = ['authService', '$sessionStorage', '$state'];

    function NavCtrl(AuthService, $sessionStorage, $state) {

        var self = this;

        self.signOut = function () {
            debugger;
            authService.signOut()
                .then(function (token) {
                    debugger;
                    delete $sessionStorage.user;

                    $state.go('sign-in');
                    // Restangular.all('users').remove();
                })
                .catch(function (error) {

                });

        };

    };



})();