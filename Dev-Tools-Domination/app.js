const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

//Regular
console.log('Hello');

//Interpolated
console.log('Hello I am a %s string!', '💩');

//Styled
console.log('%c I am some great text','font-size:50px; background:red; text-shadow:10px 10px 0 blue');

//Warning
console.warn('OH NOOO');
//Error
console.error('Shit');
//Info
console.info('Crocodile eat 3-4 people year');
//Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong');
console.assert(1 === 2,'That is wrong');

//Clear
console.clear();

//Viewing Dom Elements
console.log(p);
console.dir(p);
console.clear();
//Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`S{dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old `);
    console.log(`${dog.name} is ${dog.age * 7} years old `);
console.groupEnd(`${dog.name}`);
});
//Count 

console.count('Ismail');
console.count('Ismail');
console.count('Ismail');
console.count('Akhtar');
console.count('Ismail');
console.count('Ismail');
console.count('Akhtar');
console.count('Ismail');
console.count('Ismail');
console.count('Akhtar');
console.count('Ismail');
console.count('Ismail');
console.count('Akhtar');
console.count('Ismail');
//Timing

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
.then(response => response.json())
.then(response => {
    console.timeEnd('fetching data');
    console.log(response);
});

//Table
console.table(dogs);












