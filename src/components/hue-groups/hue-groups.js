import { inject } from 'aurelia-framework';
import { LogManager } from 'aurelia-framework';
import _ from 'lodash/lodash';
import { Store } from 'aurelia-redux-plugin';

import { HueGroupsService } from '../../services/HueGroupsService';
import groupSelectedAction from '../../actions/groupSelectedAction';
const logger = LogManager.getLogger('HueGroups');

@inject(HueGroupsService)
@inject(Store)
export class HueGroups {

  groups = [];

  constructor(hueGroupsService, store) {
    this.hueGroupsService = hueGroupsService;
    this.store = store;
  }

  created() {
    this.hueGroupsService.getGroups().then((groups) => {
      this.groups = _.map(groups, 'name');
    }).catch((error) => {
      logger.error(error.message);
    });
  }

  selectGroup(name) {
    this.store.dispatch(groupSelectedAction(name));
  }
}
