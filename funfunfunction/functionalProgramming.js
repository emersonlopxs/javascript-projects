// Higher order functions: filter, map, reduce

const animals = [
  {name: 'Eduard', species: 'rabbit'},
  {name: 'Marcos', species: 'dog'},
  {name: 'John', species: 'cat'},
  {name: 'Mary', species: 'dog'},
  {name: 'Joseph', species: 'fish'}
]

let isDog = animal => animal.species === 'dog'

// takes another function and filters the array
let dogs = animals.filter(isDog)
// console.log(dogs);


const animals2 = [
  {name: 'Eduard', species: 'rabbit'},
  {name: 'Marcos', species: 'dog'},
  {name: 'John', species: 'cat'},
  {name: 'Mary', species: 'dog'},
  {name: 'Joseph', species: 'fish'}
]

let names = animals2.map(animal => animal.name)
// console.log(names);

// WHATS REDUCEEEEE??
// Sum all the amounts

const orders = [
  { amount: 250 },
  { amount: 100 },
  { amount: 1 },
  { amount: 150 }
]

let totalAmount = orders.reduce((sum, order) => {
  console.log(sum, order);
  return sum + order.amount
}, 0)

console.log(totalAmount)





























// nothing here
