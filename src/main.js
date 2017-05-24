/**
 * 
 * @type type
 * @param {object} $locationProvider
 * @param {object} $routeProvider
 * @returns {undefined}
 */
var eAndTApp = angular.module('eAndTApp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
                .when('/', {
                    template: 'hello'
                });
    }
]);