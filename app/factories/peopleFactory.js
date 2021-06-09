(function(){

    const peopleFactory = function() {

        const people = [
            {
                id: 1,
                name: "Smad",
                date: "11/12/1994"
            },
            {
                id: 2,
                name: "Toot",
                date: "11/02/1995"
            },
            {
                id: 3,
                name: "Oz",
                date: "22/8/1993"
            },
            {
                id: 4,
                name: "Emmuna",
                date: "19/01/2001"
            },
            {
                id: 5,
                name: "Eyal",
                date: "14/09/96"
            },
            {
                id: 6,
                name: "Uria",
                date: "24/08/1997"
            },
            {
                id: 7,
                name: "Michael",
                date: "17/01/96"
            },
            {
                id: 8,
                name: "Dari",
                date: "04/06/1995"
            },
            {
                id: 9,
                name: "Maayan",
                date: "17/11/1995"
            },
            {
                id: 10,
                name: "Elad",
                date: "03/01/1999"
            },
            {
                id: 11,
                name: "Arad",
                date: "22/10/1995"
            },
            {
                id: 12,
                name: "Yael",
                date: "07/04/1999"
            },
            {
                id: 13,
                name: "Shiffi",
                date: "05/11/1992"
            },
            {
                id: 14,
                name: "Dor",
                date: "07/08/1996"
            },
            {
                id: 15,
                name: "Netta",
                date: "19/03/84"
            },
            {
                id: 16,
                name: "Foad",
                date: "16/11/1999"
            },
            {
                id: 17,
                name: "Lila",
                date: "07/06/1997"
            },
            {
                id: 18,
                name: "Seya",
                date: "11/07/1963"
            }
        ]

        const factory = {};

        factory.getPeople = () => {
            return people;
        }

        factory.getSpringBorn = () => {

            const springPeople = [];

            people.forEach(person=> {

                let month = Number(person.date.slice(3, 5));

                if(month >= 3 && month < 6) springPeople.push(person);
            });

            return springPeople;
        };

        factory.getSummerBorn = () => {

            const summerPeople = [];

            people.forEach(person=> {

                let month = Number(person.date.slice(3, 5));

                if(month >= 6 && month < 9) summerPeople.push(person);
            });

            return summerPeople;
        };

        factory.getFallBorn = () => {

            const fallPeople = [];

            people.forEach(person=> {

                let month = Number(person.date.slice(3, 5));

                if(month >= 9 && month < 12) fallPeople.push(person);
            });

            return fallPeople;
        };
        
        factory.getWinterBorn = () => {

            const winterPeople = [];

            people.forEach(person=> {

                let month = Number(person.date.slice(3, 5));

                if(month >= 12 && month < 3) winterPeople.push(person);
            });

            return winterPeople;
        };

    }
    
})();

// var customersFactory = function($http) {
    
//     var factory = {};
    
//     factory.getCustomers = function() {
//         return $http.get('/customers');
//     };
    
//     factory.getCustomer = function(customerId) {
//         return $http.get('/customers/' + customerId);
//     };
    
//     return factory;
// };

// customersFactory.$inject = ['$http'];
    
// angular.module('customersApp').factory('customersFactory', 
//                                        customersFactory);