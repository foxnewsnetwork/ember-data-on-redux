import Ember from 'ember';
import {
  DS_ROUTE_ACTIVATED,
  DS_ROUTE_DEACTIVATED,
  DS_ROUTE_PARAMS_LOADED
} from '../constants/actions';

export default {
  redux: Ember.inject.service('redux'),

  model(params, transition) {
    const redux = this.get('redux');
    redux.dispatch({
      type: DS_ROUTE_PARAMS_LOADED,
      routeName: this.routeName,
      params
    });
    return this._super(params, transition);
  },

  activate() {
    this._super();
    const redux = this.get('redux');
    redux.dispatch({
      type: DS_ROUTE_ACTIVATED,
      routeName: this.routeName
    });
  },

  deactivate() {
    this._super();
    const redux = this.get('redux');
    redux.dispatch({
      type: DS_ROUTE_DEACTIVATED,
      routeName: this.routeName
    });
  }
};
