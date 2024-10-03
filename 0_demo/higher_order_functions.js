const numbers = [33, 3, 4, 25, 12, 44, 9, 0];

const cars = ['opel', 'bmw', 'skoda', 'ferrari', 'dacia']

const persons = [
    {
        name: 'Jahn',
        age: 10
    },
    {
        name: 'Bab',
        age: 50
    },
    {
        name: 'Frank',
        age: 30
    },
    {
        name: 'James',
        age: 60
    }
];

// //forEach
// //Log all the numbers in the "numbers" array to the console.
// persons.forEach(person => {
//     console.log(person.name);
// });

// //map
// //Generate a new array by squaring each element of the "numbers" array.
// console.log(numbers.map(number => number * number))


// //find
// //Find the first person who is older than 40.
// console.log(persons.find(person => person.age > 40));


// //findIndex
// //Find the first persons index who is older than 40.
// console.log(persons.findIndex(person => person.age > 40));

// //filter
// //Find all car brands that contain the letter "a".
// console.log(cars.filter(car => car.includes('a')));


// //some
// //Is there anyone whose name contains the letter "o"?
// console.log(persons.some(person => person.name.includes('o')));


// //every
// //Are all the numbers greater than 0?
// console.log(numbers.every(number => number>0));


// //sort
// //Order all three arrays.
// console.log(numbers.sort((a, b) => a-b));

// // const sortedNumbers = numbers.sort((a, b) => a-b);
// // sortedNumbers.forEach(num => console.log(num));

// console.log(cars.sort());

// // const sortedCars = cars.sort();
// // sortedCars.forEach(car => console.log(car));

// const sortedPeople = persons.sort((p1, p2) => {
//     if (p1.name < p2.name) {
//         return -1;
//     }
//     if (p1.name > p2.name) {
//         return 1;
//     }
//      return 0;
// })
// console.log(sortedPeople);


//reduce
//Sum all the persons age.
console.log(persons.reduce((acc, curr) => acc + curr.age, 0));

console.log(numbers.reduce((acc, p) => {
    acc.push(p*p)
    return acc
}, []));
