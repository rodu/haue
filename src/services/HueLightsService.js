import { inject } from 'aurelia-framework';
import { HueService } from './HueService';

@inject(HueService)
export class HueLightsService {

  constructor(hueService) {
    this.bridge = hueService.getBridge();
  }

  getLights() {
    return new Promise((resolve, reject) => {
      this.bridge.getLights((lights) => {
        resolve(Object.values(lights));
      }, (error) => {
        reject(new Error('Could not get groups from bridge!'));
      });
    });
  }

}
