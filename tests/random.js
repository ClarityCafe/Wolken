/**
 * @file Test for Wolken#getRandom.
 * @author Capuccino
 * @author Ovyerus
 */
 
const Wolken = require('../');
const token = require('./token.json');

const handler = new Wolken(token.key, token.keyType || 'Bearer');

console.log('Starting getRandom test...');

handler.getRandom({
    type: 'pat'
}).then(console.log).catch(err => {
    console.error('getRandom test failed!');
    console.error(err);
    process.exit(1);
});