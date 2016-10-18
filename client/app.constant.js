(function () {

    'use strict';

    angular
    .module('app', [])
    .constant('jstest', {
        'tasks': {
            'hashFunction'          : 'hash',
            'counterFunction'       : 'counter',
            'globalCounterFunction' : 'globalCounter'
        }
    });
}());
