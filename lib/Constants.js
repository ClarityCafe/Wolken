const BASE_URL = 'https://api.weeb.sh';
const ENDPOINTS = {
    TAGS: '/images/tags',
    UPLOAD: '/images/upload',
    RANDOM: '/images/random',
    TYPE: '/images/types'
};

const FILETYPES = [
    'jpeg',
    'jpg',
    'png',
    'gif'
];

module.exports = {BASE_URL, ENDPOINTS, FILETYPES};