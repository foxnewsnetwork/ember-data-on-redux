import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('orchard', { path: 'orchard' }, function() {
    this.route('tree', { path: 'tree/:tree_id' }, function() {
      this.route('apple');
    });
  });
});

export default Router;
