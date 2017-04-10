'use strict';

;(function () {

    angular
        .module('darkRoom.authorization')
        .component('auth', {
            templateUrl: 'app/authorization/authorization.template.html',
            controller: AuthorizationCtrl
        });

    AuthorizationCtrl.$inject = ['$scope', '$rootScope', 'toastr', '$state'];

    function AuthorizationCtrl($scope, $rootScope, toastr, $state) {

        this.credentials = {
            email: 'admin@admin.by',
            password: 'admin'
        };

        this.login = function (credentials) {
            console.log(credentials);
            toastr.info('Authorization', 'Please wait...', {timeOut: 3000, closeButton: true});

            toastr.clear();

            $state.go('index');

        };


    };

})();