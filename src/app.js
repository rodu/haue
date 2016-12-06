import { inject, LogManager } from 'aurelia-framework';
import { Store } from 'aurelia-redux-plugin';
import { createStore, combineReducers } from 'redux';
import reducers from './reducers/reducers';
import StatePersister from './services/StatePersister';

const logger = LogManager.getLogger('App');

@inject(Store, StatePersister)
export class App {
  constructor(store, statePersister) {
    // Let's see if we have a previously saved state
    let initialState = statePersister.getPersistedState();
    let storeState;
    const combinedReducers = combineReducers(reducers);

    if (initialState) {
      logger.info('Using previously stored application state');
      storeState = createStore(combinedReducers, initialState);
    }
    else {
      logger.info('Creating a brand new state for the application');
      storeState = createStore(combinedReducers);
    }

    store.provideStore(storeState);

    statePersister.activate();
  }
}
