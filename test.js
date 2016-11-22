const filter = require('lodash/filter');
const restify = require('restify');
const test = require('tape');
const SearchkitRestify = require('./');

test('adds endpoint to routes', (assert) => {
  const server = restify.createServer();
  SearchkitRestify({ index: 'anIndex' }, server);

  const searchRoute = server.router.routes.POST.filter((route) => route.spec.path === '/_search');

  assert.plan(1);
  assert.equal(searchRoute.length, 1, 'routes list contains /_search');
});
