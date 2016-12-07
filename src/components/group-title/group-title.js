import { inject } from 'aurelia-framework';
import { Store } from 'aurelia-redux-plugin';

@inject(Store)
export class GroupTitle {

  constructor(store) {
    this.store = store;
  }

  attached() {
    const updateTitle = () => {
      const state = this.store.getState();
      this.title = state.groupSelected.name;
    };

    this.store.subscribe(updateTitle);
    updateTitle();
  }
}
