(function () {

    'use strict';

    var app = angular.module('app', ['ui.router', 'app.jstest']);

    app.config();

    /**
    * Default configuration for the application.
    *
    *
    * @memberof module:app
    * @requires $stateProvider
    * @requires $urlRouterProvider
    *
    * @ngInject
    */
    function config($stateProvider,  $urlRouterProvider) {
        $stateProvider.state('jstest', {
             name: 'jstest',
             url: '/jstest',
             templateUrl: 'views/jstest.html',
             controller: 'jstestController as jstestCtrl'
         });

         $urlRouterProvider.otherwise("/jstest");
    }
}());
