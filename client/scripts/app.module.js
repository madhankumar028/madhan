(function () {

    'use strict';

    angular.module('app',
            [
                'ui.router',
                'app.constant',
                'app.jstest'
            ])
    .config(function ($stateProvider,  $urlRouterProvider) {

        $stateProvider.state('jstest', {
            name: 'jstest',
            url: '/jstest',
            templateUrl: 'views/jstest.html',
            controller: 'jstestController as jstestCtrl'
        });

         $urlRouterProvider.otherwise("/jstest");
    });
}());
