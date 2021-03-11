const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

    // Regular
    console.log('Hello');

    // Interpolated
    console.log('I am a %s string ','blah')

    // Styled
    console.log('%c object','font-size:30px;color:red');

    // warning!
    console.warn('warning');

    // Error :|
    console.error('error');

    // Info
    console.info('what is happening');

    // Testing
    const p=document.querySelector('p');
    console.assert(p.classList.contains('ok'),'not contains');
    console.assert(1===2,'ok');

    // clearing
    console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach(dog =>{
      console.groupCollapsed(`${dog.name}`);
      console.log(`Name is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age*7} dog years old`);
      console.groupEnd(`${dog.name}`);
    })

    // counting
    console.count('Hasan');
    console.count('Nayan');
    console.count('Hasan');
    console.count('Hasan');
    console.count('Nayan');
    console.count('Hasan');
    console.count('Nayan');
    console.count('Nayan');
    console.count('Nayan');
    console.count('Hasan');

    // timing
    console.time('time ellapsed');
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(data=>{
      console.timeEnd('time ellapsed');
      console.log(data);
    })
