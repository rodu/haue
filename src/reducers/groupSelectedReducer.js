import actions from '../config/actions';
import { reduce } from './reducers';

const initialState = {
  [actions.GROUP_SELECTED]: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
  case actions.GROUP_SELECTED:
    console.log('Running groupSelectedReducer');
    return reduce(state, actions.GROUP_SELECTED, action.payload);

  default:
    return state;
  }
}
