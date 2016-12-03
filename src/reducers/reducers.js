import groupSelectedReducer from './groupSelectedReducer';

export function reduce(state, propertyName, propertyValue) {
  return Object.assign({}, state, {
    [propertyName]: propertyValue
  });
}

export default {
  groupSelectedReducer
};
