(function () {

    'use strict';

    angular
    .module('app.constant', [])
    .constant('jstest', {
        'tasks': {
            'hash'          : 'hashFunction',
            'counter'       : 'counterFunction'
        }
    });
}());
