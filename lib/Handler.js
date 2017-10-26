/**
 * @file Weeb.sh wrapper for Node.js
 * @author Capuccino
 * @author Ovyerus
 */

const https = require('https');
const url = require('url');
const {BASE_URL, ENDPOINTS, FILETYPES, KEY_TYPES} = require('./Constants');

/**
 * Weeb.sh handler
 * 
 * @param {String} key your API key for weeb.sh
 * @param {String} [keyType='Bearer'] Type of key you're using. Either 'Bearer' or 'Wolke'
 */
class Handler {
    constructor(key, keyType='Bearer') {
        if (typeof key !== 'string') return new TypeError('key is not a string.');
        if (typeof keyType !== 'string') return new TypeError('keyType is not a string.');
        if (!KEY_TYPES.includes(keyType)) throw new Error('keyType must either be "Bearer" or "Wolke".');

        this.key = `${keyType} ${key}`;
    }
    
    /**
     * Get's a random image from the API.
     * 
     * @param {Object} options Options to pass to the API.
     * @param {String} options.type Category of the image to get. Either this or `options.tags` are required.
     * @param {String[]} options.tags Tags that the image should have. Either this or `options.type` are required.
     * @param {Boolean|String} [options.allowNSFW] Whether to allow NSFW results. If this is a string, it should be 'only'.
     * @param {Boolean} [options.hidden] Whether to allow hidden results.
     * @param {String} [options.filetype] The filetype the image should be.
     * @returns {Promise<Object>} .
     */
    getRandom(options={}) {
        return new Promise((resolve, reject) => {
            if (!options.type && !options.tags) throw new Error('Either `options.tags` or `options.type` are required.');
            if (options.tags && !Array.isArray(options.tags)) throw new TypeError('options.tags is not an array.');
            if (options.allowNSFW && typeof options.allowNSFW !== 'boolean' && options.allowNSFW !== 'only') throw new TypeError('options.allowNSFW is not a boolean, or not "only"');
            if (options.allowHidden && typeof options.allowHidden !== 'boolean') throw new TypeError('options.allowHidden is not a boolean.');
            if (options.filetype && typeof options.filetype !== 'string') throw new TypeError('options.filetype is not a string.');
            if (options.filetype && !FILETYPES.includes(options.filetype.toLowerCase())) throw new Error('options.filetype must be a supported filetype.');
    
            let query = `?hidden=${options.allowHidden || false}&nsfw=${options.allowNSFW || false}`;
    
            if (options.type) query += `&type=${options.type}`;
            if (options.tags) query += `&tags=${options.tags.join(',')}`;
            if (options.filetype) query += `&filetype=${options.filetype}`;

            https.request(Object.assign(url.parse(BASE_URL + ENDPOINTS.RANDOM + query), {
                headers: {
                    Authorization: this.key
                }
            }), res => {
                let chunked = '';
                
                res.setEncoding('utf8');
                res.on('data', chunk => chunked += chunk);
                res.on('error', reject);
                res.on('end', () => {
                    try {
                        resolve(JSON.parse(chunked));
                    } catch(_) {
                        reject(new Error('No data response from API.'));
                    }
                });
            }).on('error', reject).end();
        });
    }
}

module.exports = Handler;