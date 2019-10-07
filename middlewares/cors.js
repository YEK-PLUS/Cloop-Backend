module.exports = {
  origin(origin, callback) {
    if (settings.cors.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, true);
    }
  },
  credentials: true,
};
