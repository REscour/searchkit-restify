const identity = require('lodash/identity');
const isObject = require('lodash/isObject');
const request = require('request');

module.exports = (config, server) => {
  config.queryProcessor = config.queryProcessor || identity;

  const requestClient = request.defaults({
    pool: {
      maxSockets: config.maxSockets || 1000
    }
  });

  const elasticRequest = (url, indices, body) => {
    const fullUrl = `${config.host}/${indices}${url}`;

    return requestClient.post({
      url: fullUrl,
      body: body,
      json: isObject(body),
      forever: true
    });
  }

  server.post('/_search', (req, res) => {
    const queryBody = config.queryProcessor(req.body || {}, req, res);
    const indices = (config.indicesProcessor || (() => config.index))(req);
    elasticRequest('/_search', indices, queryBody).pipe(res);
  });
}
