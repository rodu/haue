import { inject, LogManager } from 'aurelia-framework';
import _ from 'lodash';

import { HueSceneService } from '../../services/HueSceneService';

const logger = LogManager.getLogger('HueSceneService');

@inject(HueSceneService)
export class HueScenes {
  constructor(hueSceneService) {
    this.hueSceneService = hueSceneService;
  }

  attached() {
    this.hueSceneService.getScenes().then((scenes) => {
      logger.info(scenes);
      this.hasNoScenes = _.isEmpty(scenes);
      this.hasScenes = !this.hasNoScenes;
    });
  }
}
