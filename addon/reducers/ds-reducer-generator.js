import {
  DS_ROUTE_ACTIVATED,
  DS_ROUTE_DEACTIVATED,
  DS_ROUTE_PARAMS_LOADED
} from '../constants/actions';

export default function dsReducerGenerator(initialState, defaultAction) {
  return (state=initialState, action=defaultAction) => {
    switch (action.type) {
      case DS_ROUTE_ACTIVATED:
        return state.update('activeRoutes', (routes) => routes.push(action.routeName) );
      case DS_ROUTE_DEACTIVATED:
        return state.update('activeRoutes', (routes) => routes.pop() );
      case DS_ROUTE_PARAMS_LOADED:
        return state.update('routesParams', (routes) => routes.set(action.routeName, action.params) );
      default:
        return state;
    }
  };
}
