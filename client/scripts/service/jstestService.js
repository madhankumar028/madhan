(function () {

    'use strict';

    angular
    .module('app.jstest')
    .service('jstestService', jstestService);

    function jstestService($http, $q) {

        var self = this;

        self.generateHash          = generateHash;
        self.generateCounter       = generateCounter;
        // self.generateGlobalCounter = generateGlobalCounter;
        self.errorMessage = '';

        /**
         * generateHash
         *
         * @param {String} input
         * @returns {Promise} Returns a promise
         */
        function generateHash(input) {

            var options = {
                url: '/api/hash',
                method: 'POST',
                data: {
                    hashValue: input
                },
                headers: {'content-type': 'application/json'}
            },
            deferred = $q.defer();

            $http(options)
            .then(function successCallback(response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                
            });
        }

        function generateCounter(input) {

            var options = {
                url: '/api/counter',
                method: 'POST',
                data: {
                    counterValue: input
                },
                headers: {'content-type': 'application/json'}
            };

            $http(options)
            .then(function successCallback(response) {

            }, function errorCallback(response) {
                self.errorMessage = 'Invalid value';
            });
        }
    }
}());
