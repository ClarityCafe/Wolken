/**
 * @file Weeb.sh wrapper for Node.js
 * @author Capuccino
 * @author Ovyerus
 */

const https = require('https');
const url = require('url');
const { BASE_URL, ENDPOINTS, FILETYPES, KEY_TYPES } = require('./Constants');
const { version } = require('../package.json');

/**
 * Weeb.sh handler
 * 
 * @param {String} key your API key for weeb.sh
 * @param {String} [keyType='Bearer'] Type of key you're using. Either 'Bearer' or 'Wolke'
 */
class Handler {
    constructor(key, keyType='Bearer', userAgent = 'Wolken/' + version) {
        if (typeof key !== 'string') throw new TypeError('key is not a string.');
        if (typeof keyType !== 'string') throw new TypeError('keyType is not a string.');
        if (!KEY_TYPES.includes(keyType)) throw new Error('keyType must either be "Bearer" or "Wolke".');
        if (typeof userAgent !== 'string') throw new TypeError('userAgent is not a string.');

        this.key = `${keyType} ${key}`;
        this.userAgent = userAgent;
    }

    /**
     * Gets a list of all the available tags in the API.
     * 
     * @param {Boolean} [hidden=false] Whether to retrieve hidden tags.
     * @returns {Promise<String[]>} All the available tags.
     */
    getTags(hidden=false) {
        return new Promise((resolve, reject) => {
            if (typeof hidden !== 'boolean') reject(new TypeError('hidden is not a boolean.'));

            https.request(Object.assign(url.parse(BASE_URL + ENDPOINTS.TAGS), {
                headers: {Authorization: this.key, 'User-Agent': this.userAgent}
            }), res => {
                let chunked = '';

                res.setEncoding('utf8');
                res.on('data', chunk => chunked += chunk);
                res.on('error', reject);
                res.on('end', () => {
                    try {
                        let ret = JSON.parse(chunked);

                        if (ret.status !== 200) reject(ret);
                        else resolve(ret.tags);
                    } catch(err) {
                        reject(err);
                    }
                });
            }).on('error', reject).end();
        });
    }

    /**
     * Gets a list of all the available types in the API.
     * 
     * @param {Boolean} [hidden=false] Whether to retrieve hidden types.
     * @returns {Promise<String[]>} All the available types.
     */
    getTypes(hidden=false) {
        return new Promise((resolve, reject) => {
            if (typeof hidden !== 'boolean') reject(new TypeError('hidden is not a boolean.'));

            https.request(Object.assign(url.parse(BASE_URL + ENDPOINTS.TYPES), {
                headers: {Authorization: this.key, 'User-Agent': this.userAgent}
            }), res => {
                let chunked = '';

                res.setEncoding('utf8');
                res.on('data', chunk => chunked += chunk);
                res.on('error', reject);
                res.on('end', () => {
                    try {
                        let ret = JSON.parse(chunked);

                        if (ret.status !== 200) reject(ret);
                        else resolve(ret.types);
                    } catch(err) {
                        reject(err);
                    }
                });
            }).on('error', reject).end();
        });
    }

    /**
     * Gets a list of all the available tags in the API.
     * 
     * @returns {Promise<Object>} Information about the API.
     */
    getInfo() {
        return new Promise((resolve, reject) => {
            https.request(Object.assign(url.parse(BASE_URL + ENDPOINTS.INFO), {
                headers: {Authorization: this.key, 'User-Agent': this.userAgent}
            }), res => {
                let chunked = '';

                res.setEncoding('utf8');
                res.on('data', chunk => chunked += chunk);
                res.on('error', reject);
                res.on('end', () => {
                    try {
                        let ret = JSON.parse(chunked);

                        if (ret.status !== 200) reject(ret);
                        else {
                            delete ret.status;
                            resolve(ret);
                        }
                    } catch(err) {
                        reject(err);
                    }
                });
            }).on('error', reject).end();
        });
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
            if (!options.type && !options.tags) return reject(new Error('Either `options.tags` or `options.type` are required.'));
            if (options.tags && !Array.isArray(options.tags)) reject(new TypeError('options.tags is not an array.'));
            if (options.allowNSFW && typeof options.allowNSFW !== 'boolean' && options.allowNSFW !== 'only') reject(new TypeError('options.allowNSFW is not a boolean, or not "only"'));
            if (options.allowHidden && typeof options.allowHidden !== 'boolean') reject(new TypeError('options.allowHidden is not a boolean.'));
            if (options.filetype && typeof options.filetype !== 'string') reject(new TypeError('options.filetype is not a string.'));
            if (options.filetype && !FILETYPES.includes(options.filetype.toLowerCase())) reject(new Error('options.filetype must be a supported filetype.'));
    
            let query = `?hidden=${options.allowHidden || false}&nsfw=${options.allowNSFW || false}`;
    
            if (options.type) query += `&type=${options.type}`;
            if (options.tags) query += `&tags=${options.tags.join(',')}`;
            if (options.filetype) query += `&filetype=${options.filetype}`;

            https.request(Object.assign(url.parse(BASE_URL + ENDPOINTS.RANDOM + query), {
                headers: {Authorization: this.key, 'User-Agent': this.userAgent}
            }), res => {
                let chunked = '';
                
                res.setEncoding('utf8');
                res.on('data', chunk => chunked += chunk);
                res.on('error', reject);
                res.on('end', () => {
                    try {
                        let ret = JSON.parse(chunked);

                        if (ret.status !== 200) reject(ret);
                        else {
                            delete ret.status;
                            resolve(ret);
                        }
                    } catch(err) {
                        reject(err);
                    }
                });
            }).on('error', reject).end();
        });
    }
}

module.exports = Handler;