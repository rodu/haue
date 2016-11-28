import { inject } from 'aurelia-framework';
import { RoomsService } from '../../services/roomsService';
import * as jsHue from 'jsHue';

@inject(RoomsService)
export class RoomsList {

  rooms = [];

  constructor(roomsService) {
    this.rooms = roomsService.getRooms();
    console.log(jsHue);
  }
}
