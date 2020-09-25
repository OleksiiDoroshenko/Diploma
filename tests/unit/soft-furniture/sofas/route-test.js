import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | soft-furniture/sofas', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:soft-furniture/sofas');
    assert.ok(route);
  });
});
