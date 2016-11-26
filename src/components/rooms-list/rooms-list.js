import { inject } from 'aurelia-framework';
import { RoomsService } from '../../services/roomsService';

@inject(RoomsService)
export class RoomsList {

  rooms = [];

  constructor(roomsService) {
    this.rooms = roomsService.getRooms();
  }
}
