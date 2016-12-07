import { inject } from 'aurelia-framework';
import { Store } from 'aurelia-redux-plugin';
import _ from 'lodash';

@inject(Store)
class StateReader {
  constructor(store) {
    this.store = store;
  }

  getProp(propPath) {
    return _.property(propPath)(this.store.getState());
  }

}

export default StateReader;
