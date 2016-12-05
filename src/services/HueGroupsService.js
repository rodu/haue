import { inject } from 'aurelia-framework';

import { HueService } from './HueService';

@inject(HueService)
export class HueGroupsService {

  constructor(hueService) {
    this.bridge = hueService.getBridge();
  }

  getGroups() {
    return new Promise((resolve, reject) => {
      this.bridge.getGroups(resolve, (error) => {
        reject(new Error('Could not get groups from bridge!'));
      });
    });
  }
}
