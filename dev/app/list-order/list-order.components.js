'use strict';

;(function () {

    angular
        .module('darkRoom.list-order')
        .component('index', {
            templateUrl: 'app/list-order/list-order.template.html',
            controller: AuthorizationCtrl1
        });

    AuthorizationCtrl1.$inject = ['$scope', '$rootScope', 'toastr', '$state'];

    function AuthorizationCtrl1($scope, $rootScope, toastr, $state) {

        alert("YELLO");


    };

})();