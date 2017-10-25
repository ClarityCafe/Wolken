// import and export statement polyfill 
require('import-export');

if(process.version !== 'v8.5.0') require('./lib/Wolken');
else require('Wolken.Node8');