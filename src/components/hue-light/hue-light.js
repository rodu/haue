import { bindable, LogManager } from 'aurelia-framework';


const logger = LogManager.getLogger('HueLight');

export class HueLight {
  @bindable light;

  bind() {
    logger.info('Binding light', this.light);

    const state = this.light.state;
    const rgb = state.rgb;
    const bri = (state.bri / 255).toFixed(1);

    logger.info(`rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${bri})`);
    this.lightStyle = {
      'background-color': `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${bri})`
    };
  }
}
