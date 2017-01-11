import { inject, bindable, LogManager } from 'aurelia-framework';
import 'bootstrap-slider';
import 'bootstrap-colorpicker';
import $ from 'jquery';
import _ from 'lodash';
import { HueLightsService } from '../../services/HueLightsService';
import config from '../../config/config';
import hueColors from 'hue-colors';
import { SuccessResponseReader } from '../../services/SuccessResponseReader';

const logger = LogManager.getLogger('HueLight');

const getBackgroundColor = (state) => {
  if (state.on) {
    const [ x, y ] = state.xy;
    const hex = '#' + hueColors.CIE1931ToHex(x, y, state.bri);

    logger.info('Converted color:', hex);

    return hex;
  }

  return '#ccc';
};

const getBoxShadow = (opacity, backgroundColor) => {
  return `1px 1px ${opacity * 100}px ${backgroundColor}`;
};

const getOpacity = (state) => {
  return (state.bri / 2.54 / 100).toFixed(1);
};

const getStyle = (state) => {
  const backgroundColor = getBackgroundColor(state);
  const opacity = getOpacity(state);

  return {
    'background-color': backgroundColor,
    opacity,
    'box-shadow': getBoxShadow(opacity, backgroundColor)
  };
};

@inject(HueLightsService, SuccessResponseReader)
export class HueLight {
  @bindable light;

  _slider = null;

  constructor(hueLightsService, successResponseReader) {
    this.hueLightsService = hueLightsService;
    this.successResponseReader = successResponseReader;
  }

  bind() {
    logger.info('Binding light', this.light);

    const state = this.light.state;
    const brightness = (state.bri / 254).toFixed(1);

    this.light.uiProps = {
      style: getStyle(state),
      brightness: Math.round(brightness),
      id: 'uniqueid-' + this.light.uniqueid.replace(/:/g, '-')
    };
  }

  attached() {
    setTimeout(() => {
      const lightID = this.light.uiProps.id;

      this._slider = $(`#slider-${lightID}`).slider({
        min: 0,
        max: 100,
        step: 1,
        value: this.light.uiProps.brightness * 100,
        tooltip: 'hide'
      });

      // Activates the colorpicker and attaches required event handlers
      $(`#colorpicker-${lightID}`).colorpicker()
        .on('changeColor', _.throttle((event) => {
          const { r, g, b } = event.color.toRGB();
          const xy = hueColors.rgbToCIE1931(r, g, b);

          this.hueLightsService
            .setLightState(this.light.id, { xy })
            .then((response) => {
              const newXY = this.successResponseReader.readXY(
                this.light.id,
                response
              );

              logger.info('Light state set to', newXY);
              this.light.state.xy = newXY;
              this.light.uiProps.style = getStyle(this.light.state);
            });
        }, config.HUE_BRIDGE_DELAY));

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
          .then((response) => {
            const newBRI = this.successResponseReader.readBRI(
              this.light.id,
              response
            );

            logger.info('Light brightness set to', newBRI);
            this.light.state.bri = newBRI;
            this.light.uiProps.style = getStyle(this.light.state);
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
