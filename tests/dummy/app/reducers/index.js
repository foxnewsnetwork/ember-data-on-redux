import dsReducerGenerator from 'ember-data-on-redux/reducers/ds-reducer-generator';
import initialState from '../constants/initial-state';

const noOp = {};

export default {
  ds: dsReducerGenerator(initialState, noOp)
};
