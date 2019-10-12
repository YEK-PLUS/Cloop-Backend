const rfs = require('rotating-file-stream');
const path = require('path');

module.exports = rfs('access.log', {
  interval: '1d',
  path: path.join(__dirname, '../log'),
});
