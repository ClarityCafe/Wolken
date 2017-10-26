/**
 * @file Test for Wolken#getTypes.
 * @author Ovyerus
 */
 
const Wolken = require('../');
const token = require('./token.json');

const handler = new Wolken(token.key, token.keyType || 'Bearer');

console.log('Starting getTypes test...');

handler.getTypes().then(console.log).catch(err => {
    console.error('getTypes test failed!');
    console.error(err);
    process.exit(1);
});