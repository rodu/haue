import { inject } from 'aurelia-framework';

import { HueService } from './HueService';

@inject(HueService)
export class HueSceneService {

  constructor(hueService) {
    this.bridge = hueService.getBridge();
  }

  getScenes() {
    return new Promise((resolve, reject) => {
      this.bridge.getScenes(resolve, (error) => {
        reject(new Error('Could not get groups from bridge!'));
      });
    });
  }
}
