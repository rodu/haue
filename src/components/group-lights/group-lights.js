import { inject, LogManager } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Store } from 'aurelia-redux-plugin';

import _ from 'lodash';

import { HueLightsService } from '../../services/HueLightsService';
import StateReader from '../../services/StateReader';
import events from '../../config/events';

const logger = LogManager.getLogger('GroupLights');

@inject(Store, StateReader, HueLightsService, EventAggregator)
export class GroupLights {

  constructor(store, stateReader, hueLightsService, eventAggregator) {
    this.store = store;
    this.stateReader = stateReader;
    this.hueLightsService = hueLightsService;
    this.eventAggregator = eventAggregator;
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

  saveScene() {
    if (_.isEmpty(this.lights)){
      return;
    }

    const lights = this.lights.map(light => light.id);

    // First let's show the popup to give a name to the lights
    this.eventAggregator.publish(events.SCENE_ADD, lights);

    logger.info('Saving lights', lights);
  }

}
