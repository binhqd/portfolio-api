module.exports = function(options) {
  return function logError(err, req, res, next) {
    console.log('get here');
    const status = err.status || err.statusCode;
    if (status >= 500) {
      // log only Internal Server errors
      console.log('Unhandled error for request %s %s: %s',
        req.method, req.url, err.stack || err);
    }

    // Let the next error handler middleware
    // produce the HTTP response
    next(err);
  };
};
