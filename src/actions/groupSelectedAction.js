import actions from './actions';

export default function(payload) {
  return {
    type: actions.groupSelected,
    payload: payload
  };
}
