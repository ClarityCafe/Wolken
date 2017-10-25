/**
 * @file Weeb.sh wrapper for Node.js
 * @author Capuccino
 */

// NOTE: import statements are polyfilled here. do not use async statements as this is the fallback handler for Node 6.10 LTS and below

import https from 'https';
import url from 'url';
import {BASE_URL, ENDPOINTS, FILETYPES} from './Constants';

/**
 * Weeb.sh handler
 * 
 * @param {String} key your API key for weeb.sh
 * @param {Object} options various query options.
 * @prop {Boolean} [options.allowHidden] allow hidden images to be displayed.
 * @prop {Boolean|String} [options.nsfw] Whether to allow NSFW results. If this is a string, it should be "only".
 */
class Wolken {
    constructor(key, options={}) {
        if (typeof key !== 'string') return new TypeError('key is not a string');
        if (typeof allowHidden !== 'boolean') return new TypeError('allowHidden is not a boolean');
        if (this.allowNSFW && typeof this.allowNSFW !== 'boolean' && this.allowNSFW !== 'only') throw new TypeError('options.nsfw is not a boolean, or not "only"');

        this.key = `Bearer ${key}`;
        this.allowNSFW = options.allowNSFW || false;
        this.allowHidden = options.allowHidden || false;
    }
    
    /**
     * Get's a random image from the API.
     * 
     * @param {Object} options Options to pass to the API.
     * @param {String} options.type Category of the image to get. Either this or `options.tags` are required.
     * @param {String[]} options.tags Tags that the image should have. Either this or `options.type` are required.
     * @param {String} [options.filetype] The filetype the image should be.
     * @returns {Promise<Object>} .
     */
    getRandom(options={}) {
        return new Promise((resolve, reject) => {
            if (!options.type && !options.tags) throw new Error('Either `options.tags` or `options.type` are required.');
            if (options.tags && !Array.isArray(options.tags)) throw new TypeError('options.tags is not an array.');
            if (options.filetype && typeof options.filetype !== 'string') throw new TypeError('options.filetype is not a string.');
            if (options.filetype && !FILETYPES.includes(options.filetype.toLowerCase())) throw new Error('options.filetype must be a supported filetype.');
    
            let query = `?hidden=${this.allowHidden}&nsfw=${this.allowNSFW}`;
    
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

module.exports = Wolken;