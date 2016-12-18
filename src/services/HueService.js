import * as jsHue from 'jshue-module';

const BRIDGE_HOST = location.host;
const BRIDGE_USER = 'newdeveloper';

export class HueService {

  bridge = null;

  constructor() {
    this.bridge = jsHue.bridge(BRIDGE_HOST).user(BRIDGE_USER);
  }

  getBridge() {
    return this.bridge;
  }

}
