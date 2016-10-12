var _ = require('lodash');
var restify = require('restify');
var test = require('tape');
var SearchkitRestify = require('./');

test('adds endpoint to routes', function(assert) {
  var server = restify.createServer();
  SearchkitRestify({ index: 'anIndex' }, server);

  var searchRoute = _.filter(server.router.routes.POST, function(route) {
    return route.spec.path === '/_search';
  });

  assert.plan(1);
  assert.equal(searchRoute.length, 1, 'routes list contains /_search');
});
