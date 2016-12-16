import { inject, LogManager } from 'aurelia-framework';
import { HueService } from './HueService';
import hsl2rgb from 'hsl-to-rgb';

const logger = LogManager.getLogger('HueLightsService');

const convertHSLtoRGB = (light) => {
  const state = light.state;
  const xy = state.xy;

  state.rgb = hsl2rgb(state.bri, xy[0], xy[1]);

  return light;
};

const addIdAttribute = function(key) {
  this.lights[key].id = key;
};

@inject(HueService)
export class HueLightsService {

  constructor(hueService) {
    this.bridge = hueService.getBridge();
  }

  getLights() {
    return new Promise((resolve, reject) => {
      this.bridge.getLights((lights) => {
        Object.keys(lights).forEach(addIdAttribute, { lights });

        resolve(Object.values(lights).map(convertHSLtoRGB));
      }, (error) => {
        reject(new Error('Could not get groups from bridge!'));
      });
    });
  }

  setLightState(id, data) {
    logger.info('Setting light state', id, data);
    return new Promise((resolve, reject) => {
      this.bridge.setLightState(id, data, resolve, () => {
        reject(new Error('Cannot set light properties! lightid: ' + id));
      });
    });
  }

}
