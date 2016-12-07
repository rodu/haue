import { LogManager } from 'aurelia-framework';

import { actions } from '../actions/actions';
import { reduce } from './reducers';

const logger = LogManager.getLogger('groupSelectedReducer');

const initialState = {
  name: ''
};

function groupSelectedReducer(state = initialState, action) {
  switch (action.type) {
  case actions.groupSelected:
    logger.info('Running groupSelectedReducer');
    return reduce(state, 'name', action.payload);

  default:
    return state;
  }
}

export default groupSelectedReducer;
