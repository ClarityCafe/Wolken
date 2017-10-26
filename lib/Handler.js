/**
 * @file Weeb.sh wrapper for Node.js
 * @author Capuccino
 */

const https = require('https');
const url = require('url');
const {BASE_URL, ENDPOINTS, FILETYPES, KEY_TYPES} = require('./Constants');

/**
 * Weeb.sh handler
 * 
 * @param {Object} options various query options.
 * @param {String} [options.keyType] type of key to use for the API. Can be Wolke or Bearer.
 * @param {String} [options.key] the Authorization key for weeb.sh
 */
class Handler {
    /**
     * @param {Object} options various query options.
     * @param {String} [options.keyType] type of key to use for the API. Can be Wolke or Bearer.
     * @param {String} [options.key] the Authorization key for weeb.sh
     **/
    constructor(options = {}) {
        if (typeof options.key !== 'string') return new TypeError('key is not a string');
        if (!KEY_TYPES.includes(options.keyType)) return new TypeError('keyType must be either Wolke or Bearer');

        this.key = `${options.keyType} ${options.key}`;
    }
    
    /**
     * Get's a random image from the API.
     * 
     * @param {Object} options Options to pass to the query.
     * @param {String} [options.type] Category of the image to get. Either this or `options.tags` are required.
     * @prop {Boolean} [options.allowHidden] allow hidden images to be displayed.
     * @prop {Boolean|String} [options.allowNSFW] Whether to allow NSFW results. If this is a string, it should be "only".
     * @param {String[]} [options.tags] Tags that the image should have. Either this or `options.type` are required.
     * @param {String} [options.filetype] The filetype the image should be.
     * @returns {Promise<Object>} .
     */
    getRandom(options={}) {
        return new Promise((resolve, reject) => {
            if (!options.type && !options.tags) throw new Error('Either `options.tags` or `options.type` are required.');
            if (options.tags && !Array.isArray(options.tags)) throw new TypeError('options.tags is not an array.');
            if (typeof options.allowNSFW !== 'boolean') throw new TypeError('options.allowNSFW is not a string.');
            if (typeof options.allowHidden !== 'boolean') throw new TypeError('options.allowHidden is not a boolean.');
            if (options.filetype && typeof options.filetype !== 'string') throw new TypeError('options.filetype is not a string.');
            if (options.filetype && !FILETYPES.includes(options.filetype.toLowerCase())) throw new Error('options.filetype must be a supported filetype.');
    
            let query = `?hidden=${options.allowHidden}&nsfw=${options.allowNSFW}`;
    
            if (options.type) query += `&type=${options.type}`;
            if (options.tags) query += `&tags=${options.tags.join(',')}`;
            if (options.filetype) query += `&filetype=${options.filetype}`;

            https.request(Object.assign(url.parse(BASE_URL + ENDPOINTS.RANDOM + query), {
                headers: {
                    Authorization: this.key
                }
            }), (err, res) => {
                let result = '';
                
                res.setEncoding('utf8');
                res.on('data', data => data += result);
                res.on('error', reject(err));
                res.on('end', () => {
                    try {
                        resolve(JSON.parse(result));
                    } catch(_) {
                        reject(new Error('No data response from API.'));
                    }
                });
            });
        });
    }
}

module.exports = Handler;