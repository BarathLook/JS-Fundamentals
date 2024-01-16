
// default parameters and the rest operator.

function greet(name = 'Guest', ...messages) {
    console.log(`Hello, ${name}!`);
    console.log('Messages:', messages.join(', '));
}

greet('John', 'How are you?', 'Welcome!'); 


//template literals.

let Sname = 'Alice';
let Sage = 25;

let message = `Hello, my name is ${Sname} and I am ${Sage} years old.`;

console.log(message); 


//object using destructuring.

let person = { name: 'Bob', age: 30, country: 'USA' };

let { name, age } = person;

console.log(`Name: ${name}, Age: ${age}`);



//OOPS 
class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(`${this.name} says ${this.sound}`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name, 'Woof'); 
      this.breed = breed;
      this._privateVar = 42; 
    }
  
    get privateVar() {
      return this._privateVar;
    }
  
    set privateVar(value) {
      this._privateVar = value;
    }
  
    // Overriding 
    makeSound() {
      console.log(`${this.name} barks: ${this.sound}`);
    }
  
    // Encapsulated method
    _privateMethod() {
      console.log('This is a private method.');
    }
  }
  
  const cat = new Animal('Whiskers', 'Meow');
  const myDog = new Dog('Buddy', 'Golden Retriever');
  
  const animalArray = [cat, myDog];
  
  animalArray.forEach(animal => {
    animal.makeSound();
    if (animal instanceof Dog) {
      console.log('Private variable value:', animal.privateVar);
      animal.privateVar = 99; 
      console.log('Updated private variable value:', animal.privateVar);
    }
  });
  
  

// iterable object.

let num = {
    *[Symbol.iterator]() {
        for (let i = 1; i <= 5; i++) {
            yield i;
        }
    }
};

for (let n of num) {
    console.log(n);
}

//Generators

function* asyncGenerator() {
    const result1 = yield asyncOperation1();
    console.log(result1);
    const result2 = yield asyncOperation2();
    console.log(result2);
  }
  
  function asyncOperation1() {
    return new Promise(resolve => setTimeout(() => resolve('Async Operation 1'), 1000));
  }
  
  function asyncOperation2() {
    return new Promise(resolve => setTimeout(() => resolve('Async Operation 2'), 1000));
  }
  
  function handlePromise(iterator, lastValue) {
    const { value, done } = iterator.next(lastValue);
  
    if (done) {
      return Promise.resolve(value);
    }
  
    return Promise.resolve(value)
      .then(result => handlePromise(iterator, result))
      .catch(error => iterator.throw(error));
  }
  
  handlePromise(asyncGenerator());
  
  


// promise

const myPromise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve('Operation succeeded!');
    } else {
        reject('Operation failed!');
    }
});

myPromise
    .then(data => console.log(data)) // Handle fulfillment
    .catch(error => console.error(error)); // Handle rejection


const fetchData2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully!');
        }, 2000);
    });
};

//chaining promise

fetchData2()
    .then(data => {
        console.log(data);
        return 'Additional data';
    })
    .then(additionalData => console.log('Additional Data:', additionalData))
    .catch(error => console.error(error));


const promise1 = Promise.resolve('Promise 1');
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2'), 1000));
const promise3 = Promise.reject('Promise 3 Rejected');

//promise.all

Promise.all([promise1, promise2])
    .then(values => console.log('All promises resolved:', values))
    .catch(error => console.error('At least one promise rejected:', error));

const promiseA = new Promise(resolve => setTimeout(() => resolve('Promise 1'), 2000));
const promiseB = new Promise(resolve => setTimeout(() => resolve('Promise 2'), 1000));

//promise.race

Promise.race([promiseA, promiseB])
    .then(winner => console.log('The first promise resolved:', winner))
    .catch(error => console.error('The first promise rejected:', error));

//async/await promise
const fetchData3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully!');
        }, 2000);
    });
};

const fetchDataWithAsyncAwait = async () => {
    try {
        const data = await fetchData3();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

fetchDataWithAsyncAwait();

//Formatting

let date = new Date('2022-01-01');

let formattedDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date);

console.log('Formatted Date:', formattedDate); 


// Json and AJAX

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
