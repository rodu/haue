import { inject, LogManager } from 'aurelia-framework';
import { Store } from 'aurelia-redux-plugin';

import { HueLightsService } from '../../services/HueLightsService';
import StateReader from '../../services/StateReader';

const logger = LogManager.getLogger('GroupLights');

@inject(Store, StateReader, HueLightsService)
export class GroupLights {

  constructor(store, stateReader, hueLightsService) {
    this.store = store;
    this.stateReader = stateReader;
    this.hueLightsService = hueLightsService;
  }

  attached() {
    const activeGroup = this.stateReader.getProp('groupSelected.name');
    if (activeGroup) {
      this.hueLightsService.getLights()
        .then((lights) => {
          logger.debug('Loaded lights', lights);
          this.lights = lights;
        })
        .catch((error) => {
          logger.error(error.message);
        });
    }
  }

}
