import { inject } from 'aurelia-framework';
import { Store } from 'aurelia-redux-plugin';

const persistStore = _.debounce(function() {
  console.log(this.getState());
}, 250);

@inject(Store)
export default class StatePersister {

  constructor(store) {
    this.store = store;
  }

  activate() {
    // Automatically will persist to local storage when the store changes
    this.store.subscribe(persistStore.bind(this.store));
  }

}
