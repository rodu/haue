import { bindable } from 'aurelia-framework';

export class HueLight {
  @bindable light;

  bind() {
    console.log(this.light);

  }
}
