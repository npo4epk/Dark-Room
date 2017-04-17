'use strict';

;(function () {

    angular
        .module('darkRoom.list-order')
        .component('list', {
            templateUrl: 'app/list-order/list-order.template.html',
            controller: AuthorizationCtrl1
        });

    AuthorizationCtrl1.$inject = ['$scope', '$rootScope', 'toastr', '$state'];

    function AuthorizationCtrl1($scope, $rootScope, toastr, $state) {

        $rootScope.curPath = false;

        this.list = [
            {
                "_id": "58ed17e5445780fbea00f797",
                "index": 0,
                "about": "In aute deserunt anim labore ut cupidatat ex aliqua aute voluptate eu cillum. Consectetur labore incididunt dolore incididunt. Cupidatat pariatur adipisicing sint dolore irure veniam minim adipisicing.\r\n",
                "registered": "2017-02-21T04:42:15 -03:00"
            },
            {
                "_id": "58ed17e564aa6b81dc05d236",
                "index": 1,
                "about": "Proident duis veniam sint aute nisi in sit ea. Sit exercitation consequat nulla in. Non proident commodo nisi aliqua.\r\n",
                "registered": "2015-05-14T05:09:15 -03:00"
            },
            {
                "_id": "58ed17e55b695d8f58d554e4",
                "index": 2,
                "about": "Velit voluptate minim excepteur esse consectetur sint ipsum laboris adipisicing commodo incididunt ut. In est cupidatat cillum deserunt do eu ipsum velit dolore nulla et. Nostrud veniam et cupidatat incididunt proident in ea ad sit.\r\n",
                "registered": "2017-01-23T10:48:13 -03:00"
            },
            {
                "_id": "58ed17e539ab55489c0e2cbf",
                "index": 3,
                "about": "Non ut irure elit ea laboris velit labore veniam sit aliquip aute irure magna sunt. Eu irure eu culpa esse aliqua. Dolor et nulla anim laborum ad. Voluptate ex deserunt eu eiusmod Lorem nulla commodo. Cillum adipisicing qui in voluptate ipsum nulla. Voluptate irure culpa consectetur incididunt officia ex ex magna anim. Esse aute do sit labore ipsum occaecat id.\r\n",
                "registered": "2016-03-24T06:06:20 -03:00"
            },
            {
                "_id": "58ed17e539adc6234586ec9a",
                "index": 4,
                "about": "Sit fugiat nostrud anim cillum nisi ut. Velit incididunt in mollit nisi mollit dolore anim id dolor consequat Lorem cupidatat ad consectetur. Dolore nulla laborum duis irure tempor. Ullamco ut enim esse ex aliqua ad consequat dolor dolore do ad voluptate culpa velit. Adipisicing in irure enim incididunt enim quis voluptate labore magna deserunt.\r\n",
                "registered": "2014-07-06T07:52:48 -03:00"
            },
            {
                "_id": "58ed17e5b2496b7c780b2412",
                "index": 5,
                "about": "Laborum nulla culpa reprehenderit laborum Lorem aliqua adipisicing et pariatur eu ullamco. Eiusmod adipisicing Lorem exercitation dolore nulla ipsum ut dolore consectetur. Culpa quis id aute est. Velit laboris ut et cupidatat. Laboris nisi aliquip proident ad commodo aliquip. Proident magna cupidatat id adipisicing cillum pariatur culpa non. Consectetur mollit elit ipsum quis commodo reprehenderit est consequat consectetur incididunt eiusmod aute.\r\n",
                "registered": "2016-01-02T08:53:50 -03:00"
            },
            {
                "_id": "58ed17e5937e85bcd68062bb",
                "index": 6,
                "about": "Tempor minim aute reprehenderit cillum esse quis amet non consequat. Incididunt dolore ad dolore aute ea fugiat ut magna minim. Ex commodo consequat ad minim nostrud fugiat exercitation incididunt magna reprehenderit ut deserunt cillum.\r\n",
                "registered": "2016-05-22T05:10:17 -03:00"
            },
            {
                "_id": "58ed17e5445780fbea00f797",
                "index": 0,
                "about": "In aute deserunt anim labore ut cupidatat ex aliqua aute voluptate eu cillum. Consectetur labore incididunt dolore incididunt. Cupidatat pariatur adipisicing sint dolore irure veniam minim adipisicing.\r\n",
                "registered": "2017-02-21T04:42:15 -03:00"
            },
            {
                "_id": "58ed17e564aa6b81dc05d236",
                "index": 1,
                "about": "Proident duis veniam sint aute nisi in sit ea. Sit exercitation consequat nulla in. Non proident commodo nisi aliqua.\r\n",
                "registered": "2015-05-14T05:09:15 -03:00"
            },
            {
                "_id": "58ed17e55b695d8f58d554e4",
                "index": 2,
                "about": "Velit voluptate minim excepteur esse consectetur sint ipsum laboris adipisicing commodo incididunt ut. In est cupidatat cillum deserunt do eu ipsum velit dolore nulla et. Nostrud veniam et cupidatat incididunt proident in ea ad sit.\r\n",
                "registered": "2017-01-23T10:48:13 -03:00"
            },
            {
                "_id": "58ed17e539ab55489c0e2cbf",
                "index": 3,
                "about": "Non ut irure elit ea laboris velit labore veniam sit aliquip aute irure magna sunt. Eu irure eu culpa esse aliqua. Dolor et nulla anim laborum ad. Voluptate ex deserunt eu eiusmod Lorem nulla commodo. Cillum adipisicing qui in voluptate ipsum nulla. Voluptate irure culpa consectetur incididunt officia ex ex magna anim. Esse aute do sit labore ipsum occaecat id.\r\n",
                "registered": "2016-03-24T06:06:20 -03:00"
            },
            {
                "_id": "58ed17e539adc6234586ec9a",
                "index": 4,
                "about": "Sit fugiat nostrud anim cillum nisi ut. Velit incididunt in mollit nisi mollit dolore anim id dolor consequat Lorem cupidatat ad consectetur. Dolore nulla laborum duis irure tempor. Ullamco ut enim esse ex aliqua ad consequat dolor dolore do ad voluptate culpa velit. Adipisicing in irure enim incididunt enim quis voluptate labore magna deserunt.\r\n",
                "registered": "2014-07-06T07:52:48 -03:00"
            },
            {
                "_id": "58ed17e5b2496b7c780b2412",
                "index": 5,
                "about": "Laborum nulla culpa reprehenderit laborum Lorem aliqua adipisicing et pariatur eu ullamco. Eiusmod adipisicing Lorem exercitation dolore nulla ipsum ut dolore consectetur. Culpa quis id aute est. Velit laboris ut et cupidatat. Laboris nisi aliquip proident ad commodo aliquip. Proident magna cupidatat id adipisicing cillum pariatur culpa non. Consectetur mollit elit ipsum quis commodo reprehenderit est consequat consectetur incididunt eiusmod aute.\r\n",
                "registered": "2016-01-02T08:53:50 -03:00"
            },
            {
                "_id": "58ed17e5937e85bcd68062bb",
                "index": 6,
                "about": "Tempor minim aute reprehenderit cillum esse quis amet non consequat. Incididunt dolore ad dolore aute ea fugiat ut magna minim. Ex commodo consequat ad minim nostrud fugiat exercitation incididunt magna reprehenderit ut deserunt cillum.\r\n",
                "registered": "2016-05-22T05:10:17 -03:00"
            }
        ];


    };

})();