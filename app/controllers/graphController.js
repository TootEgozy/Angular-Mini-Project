(function() {
    
    let graphController = function ($scope, $log, peopleFactory) {
        $scope.people = [];

        $scope.chart = {};

        $scope.allZodiacs = [];

        $scope.spring = [];
        $scope.summer = [];
        $scope.fall = [];
        $scope.winter = [];


        function getAllZodiacs(people) {

            const allZodiacs = [];

                    peopleFactory.getByZodiac(people, 3, 21, 4, 20)
                    .then(function(arias){
                        $scope.arias = arias;
                        allZodiacs.push(arias.length);
                        
                    }, function() {
                        $log.log("Error");
                    })

                    peopleFactory.getByZodiac(people, 4, 20, 5, 21)
                    .then(function(taurus){
                        $scope.taurus = taurus;
                        allZodiacs.push(taurus.length);

                    }, function() {
                        $log.log("Error");
                    })

                    peopleFactory.getByZodiac(people, 5, 21, 6, 21)
                    .then(function(gemini){
                        $scope.gemini = gemini;
                        allZodiacs.push(gemini.length);

                    }, function() {
                        $log.log("Error");
                    })

                    peopleFactory.getByZodiac(people, 6, 21, 7, 23)
                    .then(function(cancer){
                        $scope.cancer = cancer;
                        allZodiacs.push(cancer.length);

                    }, function() {
                        $log.log("Error");
                    })
            
                    peopleFactory.getByZodiac(people, 7, 23, 8, 23)
                    .then(function(leo){
                        $scope.leo = leo;
                        allZodiacs.push(leo.length);

                    }, function() {
                        $log.log("Error");
                    })
            
                    peopleFactory.getByZodiac(people, 8, 23, 9, 23)
                    .then(function(virgo){
                        $scope.virgo = virgo;
                        allZodiacs.push(virgo.length);

                    }, function() {
                        $log.log("Error");
                    })
            
                    peopleFactory.getByZodiac(people, 9, 23, 10, 23)
                    .then(function(libra){
                        $scope.libra = libra;
                        allZodiacs.push(libra.length);

                    }, function() {
                        $log.log("Error");
                    })
            
                    peopleFactory.getByZodiac(people, 10, 23, 11, 22)
                    .then(function(scorpio){
                        $scope.scorpio = scorpio;
                        allZodiacs.push(scorpio.length);

                    }, function() {
                        $log.log("Error");
                    })
            
                    peopleFactory.getByZodiac(people, 11, 23, 12, 22)
                    .then(function(sagittarius){
                        $scope.sagittarius = sagittarius;
                        allZodiacs.push(sagittarius.length);

                    }, function() {
                        $log.log("Error");
                    })
            
                    peopleFactory.getByZodiac(people, 12, 22, 1, 20)
                    .then(function(capricorn){
                        $scope.capricorn = capricorn;
                        allZodiacs.push(capricorn.length);

                    }, function() {
                        $log.log("Error");
                    })
            
                    peopleFactory.getByZodiac(people, 1, 20, 2, 19)
                    .then(function(aquarius){
                        $scope.aquarius = aquarius;
                        allZodiacs.push(aquarius.length);

                    }, function() {
                        $log.log("Error");
                    })
            
                    peopleFactory.getByZodiac(people, 2, 19, 3, 21)
                    .then(function(pisces){
                        $scope.pisces = pisces;
                        allZodiacs.push(pisces.length);

                    }, function() {
                        $log.log("Error");
                    })

                    return allZodiacs;

        }  
        
        function checkScope() {

            $log.log($scope.allZodiacs);
        }
        
        function init() {

                peopleFactory.getPeople() 
                .then(function(people) {
                    $scope.people = people;

                    peopleFactory.getByZodiac($scope.people, 3, 21, 4, 20)
                    .then(function(arias){
                        $scope.arias = arias;
                        
                    }, function() {
                        $log.log("Error obtaining arias");
                    });

                    const zod = getAllZodiacs(people);
                    $scope.allZodiacs = zod;
                    // $scope.chart = createGraph(zod);

                }, function() {
                    $log.log("Error obtaining people");
                });                
        }
        
        init();

        checkScope();

        function createGraph(zodList) {

            const xValues = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
            const yValues = zodList;
            const barColors = ["red", "green", "blue", "orange","yellow", "lightblue", "pink", "purple", "gray", "wheat", "hotpink", "aquamarine" ];
            
            return new Chart("myChart", {
              type: "bar",
              data: {
                labels: xValues,
                datasets: [{
                  backgroundColor: barColors,
                  data: yValues
                }]
              },
              options: {
                legend: {display: false},
                title: {
                  display: true,
                  text: "Number of People per Zodiac"
                }
              }
            });
        }
    };
    
    graphController.$inject = ['$scope', '$log', 'peopleFactory'];

    angular.module('ZodiAnalyst')
      .controller('graphController', graphController);
    
}());