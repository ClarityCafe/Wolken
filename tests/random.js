/**
 * @file to test Wolken#getRandom
 * @author Capuccino
 */
 
const Wolken = require('../');
const token = require('./token.json');
const s = new Wolken({
    keyType: 'Bearer',
    key: token.key
});

s.getRandom({
    type: 'abal',
    tags: ['seifuku', 'glasses'],
    filetype: 'png'
}).then(res => console.log(res));