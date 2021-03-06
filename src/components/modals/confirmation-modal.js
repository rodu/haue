import { inject, LogManager, DOM } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import $ from 'jquery';
import events from '../../config/events';

const logger = LogManager.getLogger('ConfirmationModal');

@inject(EventAggregator, DOM.Element)
export class ConfirmationModal {
  constructor(eventAggregator, element) {
    this.eventAggregator = eventAggregator;
    this.element = element;
  }

  bind() {
    const $modal = $(this.element).children('.modal');

    this.eventAggregator.subscribe(events.SCENE_ADD, (lights) => {
      logger.info('Showing modal to add a scene');
      $modal.modal('show');
    });
  }
}
