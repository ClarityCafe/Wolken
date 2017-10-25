/**
 * @file Weeb.sh wrapper for Node.js
 * @author Capuccino
 */

// NOTE: import statements are polyfilled here. do not use async statements as this is the fallback handler for Node 6.10 LTS and below
// If you wanna use async statements, head over to Wolken.Node8.js

import https from 'https';
import {BASE_URL, TAG_ENDPOINT, UPLOAD_ENDPOINT, RANDOM_ENDPOINT, TYPE_ENDPOINT, TAGS} from './Constants';


/**
 * Weeb.sh handler
 * @param {String} key your API key for weeb.sh
 * @param {Boolean} allowHidden allow hidden images to be displayed.
 */
class Wolken {
    consturctor(key, options = {}) {
        this.key = key;
        this.allowHidden = options.allowHidden || false;
        if (typeof key !== 'string') return new TypeError('key is not a string');
        if (typeof allowHidden !== 'boolean') return new TypeError('allowHidden is not a boolean');
    }
    
        
    getRandom() {
        return new Promise((resolve, reject) => {
           https.get(BASE_URL + RANDOM_ENDPOINT, (err, res) => {
               
               let result = '';
               
               res.setEncoding('utf8');
               res.on('data', data => data += result);
               res.on('err', reject(err));
               res.on('end', () => {
                   //soon:tm:
               });
           });
        });
    }
}

module.exports = Wolken;