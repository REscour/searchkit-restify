var identity = require('lodash/identity');
var isObject = require('lodash/isObject');
var request = require('request');

module.exports = function(config, server) {
  config.queryProcessor = config.queryProcessor || identity;

  var requestClient = request.defaults({
    pool: {
      maxSockets: config.maxSockets || 1000
    }
  });

  var elasticRequest = function(url, body) {
    var fullUrl = config.host + "/" + config.index + url;

    return requestClient.post({
      url: fullUrl,
      body: body,
      json: isObject(body),
      forever: true
    });
  }

  server.post('/_search', function(req, res) {
    var queryBody = config.queryProcessor(req.body || {}, req, res);
    elasticRequest('/_search', queryBody).pipe(res);
  });
}
