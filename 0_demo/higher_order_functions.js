const numbers = [1,2,3,4,5];

const cars = ['opel', 'bmw', 'skoda', 'ferrari', 'dacia']

const persons = [
    {
        name: 'John',
        age: 1
    },
    {
        name: 'Bob',
        age: 2
    },
    {
        name: 'Frank',
        age: 3
    },
    {
        name: 'James',
        age: 4
    }
];

//forEach
//Log all the numbers in the "numbers" array to the console.
/* numbers.forEach((element) => { 
    element = element + 1;
});

console.log(numbers); */


//map
//Generate a new array by squaring each element of the "numbers" array.
//console.log(numbers.map((e) => e*e))

//find
//Find the first person who is older than 40.
/* console.log(persons.find((p) => {
    return p;
})) */

//findIndex
//Find the first persons index who is older than 40.
/* console.log(persons.findIndex((e) => {
    return e.age>40;
})) */

//filter
//Find all car brands that contain the letter "a".
//console.log(cars.filter((c) => true))

//some
//Is there anyone whose name contains the letter "o"?
//console.log(persons.some((e) => {return e.name.includes('o')}))

//every
//Are all the numbers greater than 0?
//console.log(numbers.every(e => e > 0))

//sort
//Order all three arrays.
/* numbers.sort((a,b) => a-b);
cars.sort();
persons.sort((a, b) => {
    if(a.name > b.name) {
        return 1
    } else {
        return -1
    }
})

console.log(persons); */

//reduce
//Sum all the persons age.
//console.log(persons.reduce((a, p)=>a + p.age, 0));
