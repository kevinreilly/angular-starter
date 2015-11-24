var elementsApp = angular.module('elementsApp', ['ui.router','ui.bootstrap','ngAnimate']);

elementsApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider

    // home view
    .state('home', {
        url: '/',
        views: {
            '': { templateUrl: 'partials/home.html' },
            'table@home': {
                templateUrl: 'partials/table.html',
                controller: 'tableCtrl'
            }
        }
    })
});

// main controller
elementsApp.controller('mainCtrl', function($scope){
    
});

// table controller
elementsApp.controller('tableCtrl', function($scope){
    
});