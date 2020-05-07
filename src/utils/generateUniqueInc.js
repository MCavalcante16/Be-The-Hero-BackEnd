const crypto = require('crypto');

module.exports = function generateUniqueId() {
    return Math.floor(Math.random() * 65536);
}