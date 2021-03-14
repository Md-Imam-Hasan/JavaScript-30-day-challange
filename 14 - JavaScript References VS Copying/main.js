// start with strings, numbers and booleans
let number = 30;
let num1 = number 
console.log(number, num1);
number=40;
console.log(number, num1);


// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];


// and we want to make a copy of it.


// You might think we can just do something like this:
// let team1=players;
// console.log(team1,players);



// however what happens when we update that array?
// team1[3]='lux';

// now here is the problem!

// oh no - we have edited the original array too!
// console.log(team1,players);

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
// let team2 = players.slice();
// console.log(team2,players);
// team2[3]='lux';
// console.log(team2,players);

// or create a new array and concat the old one in
// let team3 = [].concat(players)
// console.log(team3,players);
// team3[3]='hop'
// console.log(team3,players);

// or use the new ES6 Spread
let team4=[...players];
console.log(team4,players);
team4[3]='hop'
console.log(team4,players);
let team5 = Array.from(players)
console.log(team5,players);
team5[3]='lux'
console.log(team5,players);


// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

    // and think we make a copy:
    let obj1=person;
    console.log(obj1);
    // obj1.age=59;
    // console.log(obj1,person);

    // how do we take a copy instead?
    let obj2= Object.assign({},person,{age:2})
    console.log(obj2,person);

    const person2 ={
      name:'hasan',
      age:'26',
      social:{
        fb:'facebook.com',
        twitter:'twitter.com'
      }
    }

    const dev=person2;
    console.log(person2,dev);
    dev.social.fb='ok';
    console.log(person2.social,dev.social);

    let dev2 = JSON.parse(JSON.stringify(person2));
    console.log(person2.social,dev2.social);
    dev2.social.fb='blah blah';

    console.log(person2.social,dev2.social);

    // We will hopefully soon see the object ...spread
    let dev3 = {...person2};
    console.log(person2.social,dev3.social);
    dev3.social.fb='hahahahah';
    console.log(person2.social,dev3.social);
    


    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
