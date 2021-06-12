(function() {
    
    let peopleTableController = function ($scope, $log, peopleFactory) {
        $scope.people = [];
         
        
        function init() {

                // peopleFactory.getPeople()
                // .then(function(peops) {
                //     $scope.people = peops;
                // })
                // .error(function(data, status, headers, config) {
                //     $log.log('Error~~ ' +data.error + ' ' + status);
                // });

                peopleFactory.getPeople() 
                .then(function(people) {
                    $scope.people = people;
                }, function() {
                    $log.log("Error obtaining people");
                });
        }
        
        init();
    };
    
    peopleTableController.$inject = ['$scope', '$log', 'peopleFactory'];

    angular.module('ZodiAnalyst')
      .controller('peopleTableController', peopleTableController);
    
}());