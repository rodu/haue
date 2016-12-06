import { inject, LogManager } from 'aurelia-framework';
import { Store } from 'aurelia-redux-plugin';
import config from '../config/config';
import StorageService from './StorageService';

const logger = LogManager.getLogger('StatePersister');

@inject(Store, StorageService)
export default class StatePersister {
  _isActivated = false;

  constructor(store, storageService) {
    this.store = store;
    this.storageService = storageService;
  }

  activate() {
    if (this._isActivated) {
      logger.warning('StatePersister can only be activated once!');
      return;
    }

    const persistState = _.debounce(() => {
      const state = this.store.getState();

      logger.info('Persisting state', state);

      this.storageService.setItem(config.PERSISTED_STATE, state);
    }, 250);

    // Automatically will persist to local storage when the store changes
    this.store.subscribe(persistState);
    this._isActivated = true;
  }

  getPersistedState() {
    return this.storageService.getItem(config.PERSISTED_STATE);
  }

}
