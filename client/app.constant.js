(function () {

    'use strict';

    angular
    .module('app.constant', [])
    .constant('jstest', {
        'tasks': {
            'hash'          : 'hashFunctio',
            'counter'       : 'counterFunction',
            'globalCounter' : 'globalCounterFunction'
        }
    });
}());
