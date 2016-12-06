import { inject } from 'aurelia-framework';
import { Store } from 'aurelia-redux-plugin';
import { createStore, combineReducers } from 'redux';
import reducers from './reducers/reducers';

@inject(Store)
export class App {
  constructor(store) {
    store.provideStore(createStore(combineReducers(reducers)));
  }
}
