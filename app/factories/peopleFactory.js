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
                date: "22/08/1993"
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

        // Get all people:

        factory.getPeople = () => {

            const prom = new Promise((resolve, reject)=> {
                resolve(people);
                reject([]);
            });

            return prom;
        }

        // Get people by season:

        factory.getBySeason = (season) => {

            let startMonth = null;
            let endMonth = null;

            if (season === 'spring') {
                startMonth = 3;
                endMonth = 6;
            }

            else if (season === 'summer') {
                startMonth = 6;
                endMonth = 9;
            }

            else if (season === 'fall') {
                startMonth = 9;
                endMonth = 12;
            }

            else if (season === 'winter') {
                startMonth = 12;
                endMonth = 3;
            }

            const seasonPeople = [];

            people.forEach(person=> {

                let month = Number(person.date.slice(3, 5));

                if((month > 2 && month < 12) && (month >= startMonth && month < endMonth)) {
                    console.log(person.id);
                    seasonPeople.push(person);
                }

                else {
                    if((month === 1 || month === 2 || month === 12) && season === 'winter') {
                        console.log(person.id);
                        seasonPeople.push(person);
                    }
                }
            });

            const prom = new Promise((resolve, reject)=> {
                resolve(seasonPeople);
                reject([]);
            });
            
            return prom;
        }

        // Get people by their zodiac

        factory.getByZodiac = (people, startMonth, startDay, endMonth, endDay) => {

            const zodiac = [];

            people.forEach(person=> {

                const day = Number(person.date.slice(0, 2));
                const month = Number(person.date.slice(3, 5));

                if((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) zodiac.push(person);
            });

            const prom = new Promise((resolve, reject)=> {
                resolve(zodiac);
                reject([]);
            });
            
            return prom;
        } 

        return factory;

    }

    angular.module('ZodiAnalyst').factory('peopleFactory', 
    peopleFactory);
    
})();
