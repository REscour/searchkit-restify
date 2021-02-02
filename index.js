const identity = require('lodash/identity');
const isObject = require('lodash/isObject');
const request = require('request');

module.exports = (config, server) => {
  config.queryProcessor = config.queryProcessor || identity;
  config.responseBodyProcessor = config.responseBodyProcessor || ((req, res, body) => body);

  let middleware = (req, res, next) => next(req, res);
  if (config.middleware) middleware = config.middleware;

  const requestClient = request.defaults({
    pool: {
      maxSockets: config.maxSockets || 1000
    }
  });

  const elasticRequest = (endpoint, indices, body, cb) => {
    const url = `${config.host}/${indices}${endpoint}`;

    return requestClient.post({
      json: isObject(body),
      forever: true,
      body,
      url
    }, cb);
  };

  server.post({ path: '/_search' },
    middleware,
    (req, res) => {
      const queryBody = config.queryProcessor(req.body || {}, req, res);
      const indices = (config.indicesProcessor || (() => config.index))(req, res);
      if (res.statusCode !== 200) return res;
      elasticRequest('/_search', indices, queryBody, (error, response, body) => {
        if (error) return res.status(response.statusCode).send(error);
        if (config.responseBodyProcessor) body = config.responseBodyProcessor(req, res, body);
        res.send(body);
      });
    });
};
