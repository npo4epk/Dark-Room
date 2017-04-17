'use strict';

;(function () {

    angular
        .module('darkRoom.authorization')
        .component('auth', {
                   templateUrl: 'app/authorization/views/authorization.template.html',
                   controller: AuthoCtrl
        });


    AuthoCtrl.$inject = ['$scope', '$rootScope', 'toastr', '$state', '$sessionStorage'];

    function AuthoCtrl($scope, $rootScope, toastr, $state, $sessionStorage) {

        $rootScope.curPath = true;

        var self = this;

        self.credentials = {
            email: 'admin@admin.by',
            password: 'admin'
        };

        self.login = function (credentials) {

            console.log(credentials);
            toastr.success('Authorization', 'Please wait...', {timeOut: 3000, closeButton: true});

            // $sessionStorage.user = true;

            toastr.clear();

            $state.go('list');

        };


    };

})();


// https://ngfitloftschool.firebaseapp.com/
// https://gmail-clone.herokuapp.com/#/login
//    https://github.com/GonikDaniel/Gmail-clone

// http://embed.plnkr.co/ZFmB4OR36th3yfKjFQMb/
// https://github.com/PidginEnemy/mail-app-angular
// https://habrahabr.ru/post/277087/ - почитать
// https://habrahabr.ru/post/277087/ - почитать
