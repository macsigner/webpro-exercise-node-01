import fetch from 'node-fetch';

let argv = process.argv.splice(2);

console.log(argv);

if (argv.length > 0) {
    let url = argv[0];

    let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    let json = await response.json();

    console.log(`https://${json.result.short_link}`);
}
