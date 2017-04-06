'use strict';

;(function () {

    angular
        .module('darkRoom.authorization')
        .component('authorization', {
            templateUrl: 'app/authorization/authorization.template.html',
            controller: AuthorizationCtrl
        });

    AuthorizationCtrl.$inject = ['$scope', '$rootScope'];

    function AuthorizationCtrl($scope, $rootScope) {

        var selt = this;

        selt.credentials = {
            email: 'admin@admin.by',
            password: 'admin'
        };


    };

})();