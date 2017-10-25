/**
 * @file Weeb.sh wrapper for Node.js
 * @author Capuccino
 */

import https from 'https';
import {BASE_URL, TAG_ENDPOINT, UPLOAD_ENDPOINT, RANDOM_ENDPOINT, TYPE_ENDPOINT} from './Constants';

// NOTE: import statements are polyfilled here. Node 8.5.0 does not support import beyond .mjs files yet.

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
}

module.exports = Wolken;