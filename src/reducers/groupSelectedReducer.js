import actions from '../actions/actions';
import { reduce } from './reducers';

const initialState = {
  [actions.groupSelected]: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
  case actions.groupSelected:
    console.log('Running groupSelectedReducer');
    return reduce(state, actions.groupSelected, action.payload);

  default:
    return state;
  }
}
