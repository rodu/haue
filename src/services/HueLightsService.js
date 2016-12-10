import { inject } from 'aurelia-framework';
import { HueService } from './HueService';
import hsl2rgb from 'hsl-to-rgb';

const convertHSLtoRGB = (light) => {
  const state = light.state;
  const xy = state.xy;

  state.rgb = hsl2rgb(state.bri, xy[0], xy[1]);

  return light;
};

@inject(HueService)
export class HueLightsService {

  constructor(hueService) {
    this.bridge = hueService.getBridge();
  }

  getLights() {
    return new Promise((resolve, reject) => {
      this.bridge.getLights((lights) => {
        resolve(Object.values(lights).map(convertHSLtoRGB));
      }, (error) => {
        reject(new Error('Could not get groups from bridge!'));
      });
    });
  }

}
