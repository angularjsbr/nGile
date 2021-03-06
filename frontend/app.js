angular.module('nGile', ['ui.bootstrap','ui.utils','ui.router','ngAnimate', 'core','ngMessages']);

angular.module('nGile').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/dashboard');

});

angular.module('nGile').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
