/**
 * @file Weeb.sh wrapper for Node.js
 * @author Capuccino
 */

import https from 'https';
import {BASE_URL, TAG_ENDPOINT, UPLOAD_ENDPOINT, RANDOM_ENDPOINT, TYPE_ENDPOINT} from './Constants';

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
    
    getTags() {
        /** @todo do this properly later */
        https.get(`${BASE_URL}${TAG_ENDPOINT}`);
    }
}

module.exports = Wolken;