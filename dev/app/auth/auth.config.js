'use strict';

;(function () {


    angular
        .module('darkRoom.auth')
        .config(initializeUserConfig);


    function initializeUserConfig() {


        firebase.initializeApp({
            apiKey:        'AIzaSyCN9hbHRwMudfpvaoVjJVoGT2DvwFOQdxQ',
            authDomain:    'darkroom-f7dc2.firebaseapp.com',
            databaseURL:   'https://darkroom-f7dc2.firebaseio.com',
            storageBucket: 'darkroom-f7dc2.appspot.com'
        });


    };


})();