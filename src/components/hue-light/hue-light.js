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
      brightness: Math.round(brightness),
      id: 'uniqueid-' + this.light.uniqueid.replace(/:/g, '-')
    };
  }

  attached() {
    setTimeout(() => {
      let slider = $(`#${this.light.uiProps.id}`).slider({
        min: 0,
        max: 100,
        step: 1,
        value: this.light.uiProps.brightness
      });

      slider.on('slide', (event) => {
        this.light.uiProps.brightness = (event.value / 100);
      });
    });
  }
}
