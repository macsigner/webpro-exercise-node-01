import fetch from 'node-fetch';

// Todo: missing API key :)
let response = await fetch('https://freegeoip.app/json/');
let json = await response.json();

console.log(json);
