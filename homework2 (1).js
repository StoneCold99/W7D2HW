//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(Object.keys(person3))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
// Object prototype for a Person

// Person prototype
const Person = function (name, age) {
    this.name = name;
    this.age = age;
  
    // Arrow function for printInfo method
    this.printInfo = () => {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
  
    // Arrow function for incrementAge method
    this.incrementAge = () => {
      this.age += 1;
    };
  };
  
  // Create two people using the 'new' keyword
  const person1 = new Person('Alice', 25);
  const person2 = new Person('Bob', 30);

  person1.printInfo(); // Output: Name: Alice, Age: 25
  person2.printInfo(); // Output: Name: Bob, Age: 30
  
  // Increment the age of one person by 3 years
  person1.incrementAge();
  person1.incrementAge();
  person1.incrementAge();
  
  person1.printInfo();
  

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(inputString) {
    return new Promise((resolve, reject) => {
      if (typeof inputString !== 'string') {
        reject(new Error('Input is not a string'));
      } else {
        if (inputString.length > 10) {
          resolve('Big word');
        } else {
          resolve('Small word');
        }
      }
    });
  }
  checkStringLength('hello world')
    .then(result => {
      console.log(result); // Output: Big word
    })
    .catch(error => {
      console.error(error.message);
    });
  
  checkStringLength('hello')
    .then(result => {
      console.log(result); // Output: Small word
    })
    .catch(error => {
      console.error(error.message);
    });
  checkStringLength(42)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error.message); // Output: Input is not a string
    });

    /**
     * 
     * 
     * CODEWARS HOMEWORK #1
     * 
     * https://www.codewars.com/kata/5f70c883e10f9e0001c89673/javascript
     */
    // ANSWER
    //const flip=(d, a)=>{
     //   return d === "R" ? a.sort(function(x, y){return x-y}) : a.sort(function(x, y){return y-x})
     // }