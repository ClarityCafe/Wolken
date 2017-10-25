const BASE_URL = 'https://api.weeb.sh';
const ENDPOINTS = {
    TAGS: '/images/tags',
    UPLOAD: '/images/upload',
    RANDOM: '/images/random',
    TYPE: '/images/types'
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