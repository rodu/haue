import { bindable, LogManager } from 'aurelia-framework';
import 'bootstrap-slider';
import $ from 'jquery';

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

export class HueLight {
  @bindable light;

  bind() {
    logger.info('Binding light', this.light);

    const state = this.light.state;
    const brightness = (state.bri / 255).toFixed(1);

    this.light.uiProps = {
      style: {
        'background-color': getBackgroundColor(state, brightness)
      },
      percentBrightness: Math.round(brightness * 100),
      id: 'uniqueid-' + this.light.uniqueid.replace(/:/g, '-')
    };
  }

  attached() {
    setTimeout(() => {
      $(`#${this.light.uiProps.id}`).slider();
    });
  }
}
