/**
 * @file to test Wolken#getRandom
 * @author Capuccino
 */
 
const Wolken = require('../');
const token = require('./token.json');

const handler = new Wolken(token.key, token.keyType || 'Bearer');

console.log('Starting getRandom test...');

handler.getRandom({
    type: 'pat'
}).then(console.log).catch(console.error);