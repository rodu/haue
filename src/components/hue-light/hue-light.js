import { bindable, LogManager } from 'aurelia-framework';


const logger = LogManager.getLogger('HueLight');

export class HueLight {
  @bindable light;

  bind() {
    logger.info('Binding light', this.light);

    const rgb = this.light.state.rgb;
    this.lightStyle = {
      'background-color': `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    };
  }
}
