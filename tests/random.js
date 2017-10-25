/**
 * @file to test Wolken#getRandom
 * @author Capuccino
 */
 
const Wolken = require('../');
const token = require('./token.json');
const s = new Wolken(token, {
    //lewd af boi
    allowHidden: true
});
 
s.getRandom().then(res => console.log(res));