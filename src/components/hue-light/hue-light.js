import { inject, bindable, LogManager } from 'aurelia-framework';
import 'bootstrap-slider';
import $ from 'jquery';
import _ from 'lodash';
import { HueLightsService } from '../../services/HueLightsService';
import config from '../../config/config';

const logger = LogManager.getLogger('HueLight');

const getBackgroundColor = (state, brightness) => {
  if (state.on) {
    const rgb = state.rgb;
    const value = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${brightness})`;

    logger.info(value);
    return value;
  }

  return '#ccc';
};

@inject(HueLightsService)
export class HueLight {
  @bindable light;

  _slider = null;

  constructor(hueLightsService) {
    this.hueLightsService = hueLightsService;
  }

  bind() {
    logger.info('Binding light', this.light);

    const state = this.light.state;
    const brightness = (state.bri / 255).toFixed(1);

    this.light.uiProps = {
      style: {
        'background-color': getBackgroundColor(state, brightness)
      },
      brightness: Math.round(brightness),
      id: 'uniqueid-' + this.light.uniqueid.replace(/:/g, '-')
    };
  }

  attached() {
    setTimeout(() => {
      this._slider = $(`#${this.light.uiProps.id}`).slider({
        min: 0,
        max: 100,
        step: 1,
        value: this.light.uiProps.brightness * 100,
        tooltip: 'hide'
      });

      this._slider.on('slide', (event) => {
        // Optimistically updates the UI first
        this.light.uiProps.brightness = event.value / 100;
      });

      this._slider.on('slide', _.throttle((event) => {
        const bri = Math.floor(event.value * 2.54);

        logger.info('Setting light brightness');

        this.hueLightsService
          // Set the light properties on the bridge
          .setLightState(this.light.id, { bri: bri })
          .then(() => {
            logger.info('Light brightness set to', bri);
          });

        // Adjusts the light property again as returned by the bridge response
      }, config.HUE_BRIDGE_DELAY));
    });
  }

  detached() {
    // Removes events from slider plugin
    this._slider.off('slide');
  }
}
