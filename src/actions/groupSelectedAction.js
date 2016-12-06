import actions from '../config/actions';

export default function(payload) {
  return {
    type: actions.groupSelected,
    payload: payload
  };
}
