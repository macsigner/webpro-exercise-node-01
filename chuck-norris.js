import fetch from 'node-fetch';

let response = await fetch('https://api.chucknorris.io/jokes/random');
let json = await response.json();

console.log(json.value);
