import { inject } from 'aurelia-framework';
import { Store } from 'aurelia-redux-plugin';
import { createStore, combineReducers } from 'redux';
import reducers from './reducers/reducers';
import StatePersister from './services/StatePersister';

@inject(Store, StatePersister)
export class App {
  constructor(store, statePersister) {
    store.provideStore(createStore(combineReducers(reducers)));

    statePersister.activate();
  }
}
