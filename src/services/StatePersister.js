import { inject, LogManager } from 'aurelia-framework';
import { Store } from 'aurelia-redux-plugin';
import config from '../config/config';

const logger = LogManager.getLogger('StatePersister');

const persistState = _.debounce(function() {
  const state = this.getState();

  logger.info('Persisting state', state);

  localStorage.setItem(config.PERSISTED_STATE, state);
}, 250);

@inject(Store)
export default class StatePersister {

  constructor(store) {
    this.store = store;
  }

  activate() {
    // Automatically will persist to local storage when the store changes
    this.store.subscribe(persistState.bind(this.store));
  }

}
