/**
 * @file Test for Wolken#getInfo.
 * @author Ovyerus
 */
 
const Wolken = require('../');
const token = require('./token.json');

const handler = new Wolken(token.key, token.keyType || 'Bearer');

console.log('Starting getInfo test...');

handler.getInfo().then(console.log).catch(err => {
    console.error('getInfo test failed!');
    console.error(err);
    process.exit(1);
});