const BASE_URL = 'https://api.weeb.sh';

const ENDPOINTS = {
    INFO: '/images/',
    TAGS: '/images/tags',
    TYPES: '/images/types',
    UPLOAD: '/images/upload',
    RANDOM: '/images/random'
};

const KEY_TYPES = [
    'Wolke',
    'Bearer'
];

const FILETYPES = [
    'jpeg',
    'jpg',
    'png',
    'gif'
];

module.exports = {BASE_URL, ENDPOINTS, FILETYPES, KEY_TYPES};