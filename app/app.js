(function() {
    
    var app = angular.module('ZodiAnalyst', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'peopleTableController',
                templateUrl: 'app/views/peopleTable.html'
            })
            .when('/graph', {
                controller: 'graphController',
                templateUrl: 'app/views/graph.html'
            })
            .when('/add', {
                controller: 'addingFormController',
                templateUrl: 'app/views/addingForm.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());