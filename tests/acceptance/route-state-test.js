import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | route state');

test('Redux should properly maintain router state', function(assert) {
  let redux = null;
  let container = null;
  visit('/');

  andThen(() => {
    container = this.application.__container__;
    redux = container.lookup('service:redux');
    const { ds: state } = redux.getState();
    assert.ok(redux);
    assert.ok(container);
    assert.ok(state);
    assert.equal(currentURL(), '/');

    const activeRoutes = state.get('activeRoutes');
    assert.ok(activeRoutes);
    assert.equal(Ember.typeOf(activeRoutes.toArray), 'function');


    visit('/orchard');
  });

  andThen(function() {
    const { ds: state } = redux.getState();
    assert.ok(state);
    assert.deepEqual(state.get('activeRoutes').toArray(),
      ['application', 'orchard', 'orchard.index']);

    visit('/orchard/tree/1');
  });

  andThen(function() {
    const { ds: state } = redux.getState();
    assert.ok(state);
    assert.deepEqual(state.get('activeRoutes').toArray(),
      ['application', 'orchard', 'orchard.index', 'tree', 'tree.index']);

    visit('/orchard/tree/1/apple');
  });

  andThen(function() {
    const { ds: state } = redux.getState();

    assert.deepEqual(state.get('activeRoutes').toArray(),
      ['application', 'orchard', 'orchard.index', 'tree', 'tree.index', 'apple']);
  });
});
