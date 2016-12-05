import { inject } from 'aurelia-framework';
import { LogManager } from 'aurelia-framework';
import _ from 'lodash';

import { HueGroupsService } from '../../services/HueGroupsService';

const logger = LogManager.getLogger('HueGroups');

@inject(HueGroupsService)
export class HueGroups {

  groups = [];

  constructor(hueGroupsService) {
    this.hueGroupsService = hueGroupsService;
  }

  created() {
    this.hueGroupsService.getGroups().then((groups) => {
      this.groups = _.map(groups, 'name');
    }).catch((error) => {
      logger.error(error.message);
    });
  }
}
