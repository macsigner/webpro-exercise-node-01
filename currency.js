import fetch from 'node-fetch';

let response = await fetch('https://open.er-api.com/v6/latest/CHF');
let json = await response.json();

let argv = process.argv.splice(2);
let currency = argv[0];

if (Object.keys(json.rates).includes(currency)) {
    console.log(json.rates[currency]);
}
