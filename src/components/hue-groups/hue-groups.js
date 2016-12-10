import { inject } from 'aurelia-framework';
import { LogManager } from 'aurelia-framework';
import { Store } from 'aurelia-redux-plugin';
import _ from 'lodash';
import { HueGroupsService } from '../../services/HueGroupsService';
import groupSelectedAction from '../../actions/groupSelectedAction';
import StateReader from '../../services/StateReader';

const logger = LogManager.getLogger('HueGroups');

const mapActiveGroup = function(group) {
  group.active = (this.activeGroupName === group.name) ? 'active' : '';
  return group;
};

@inject(HueGroupsService, Store, StateReader)
export class HueGroups {

  groups = [];

  constructor(hueGroupsService, store, stateReader) {
    this.hueGroupsService = hueGroupsService;
    this.store = store;
    this.stateReader = stateReader;
  }

  created() {
    this.hueGroupsService.getGroups()
      .then((groups) => {
        logger.debug('Loaded groups', groups);

        const mapBinding = {
          activeGroupName: this.stateReader.getProp('groupSelected.name')
        };

        this.groups = _.map(groups, _.bind(mapActiveGroup, mapBinding));
      })
      .catch((error) => {
        logger.error(error.message);
      });
  }

  selectGroup(name) {
    this.store.dispatch(groupSelectedAction(name));
  }
}
