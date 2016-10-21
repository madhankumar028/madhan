(function () {

    'use strict';

    angular
    .module('app.jstest')
    .service('JstestService', JstestService);

    function JstestService($http, $q) {

        var self = this;

        self.generateHash          = generateHash;
        self.generateCounter       = generateCounter;
        self.generateGlobalCounter = generateGlobalCounter;
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

            return deferred.promise;
        }

        /**
         * generateCounter
         *
         * @param {String} input
         * @returns {Promise} Returns a promise
         */
        function generateCounter(input) {

            var options = {
                url: '/api/counter',
                method: 'POST',
                data: {
                    counterValue: input
                },
                headers: {'content-type': 'application/json'}
            },
            deferred = $q.defer();

            $http(options)
            .then(function successCallback(response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject('Error while counting the user Input');
                self.errorMessage = 'Invalid value';
            });

            return deferred.promise;
        }

        /**
         * generateGlobalCounter
         *
         * @param {String} input
         * @returns {Promise} Returns a promise
         */
        function generateGlobalCounter(input) {

            var options = {
                url: '/api/global-counter',
                method: 'POST',
                data: {
                    globalCounterValue: input
                },
                headers: {'content-type': 'application/json'}
            },
            deferred = $q.defer();

            $http(options)
            .then(function successCallback(response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject('Error while counting the user Input');
            });

            return deferred.promise;
        }
    }
}());
