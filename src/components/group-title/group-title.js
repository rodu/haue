import { inject } from 'aurelia-framework';
import { Store } from 'aurelia-redux-plugin';
import StateReader from '../../services/StateReader';

@inject(Store, StateReader)
export class GroupTitle {
  _onNameUpdate;

  constructor(store, stateReader) {
    this.store = store;
    this.stateReader = stateReader;
  }

  attached() {
    const updateTitle = () => {
      this.name = this.stateReader.getProp('groupSelected.name');
    };

    this._onNameUpdate = this.store.subscribe(updateTitle);
    updateTitle();
  }

  detached() {
    // Removes the store subscription
    this._onNameUpdate();
  }
}
