/**
 * @file Weeb.sh wrapper for Node.js
 * @author Capuccino
 */

import https from 'https';

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