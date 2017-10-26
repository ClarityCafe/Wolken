/**
 * @file Test for Wolken#getTags.
 * @author Ovyerus
 */
 
const Wolken = require('../');
const token = require('./token.json');

const handler = new Wolken(token.key, token.keyType || 'Bearer');

console.log('Starting getTags test...');

handler.getTags().then(console.log).catch(err => {
    console.error('getTags test failed!');
    console.error(err);
    process.exit(1);
});