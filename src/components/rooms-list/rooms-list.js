import { inject } from 'aurelia-framework';
import { RoomsService } from '../../services/roomsService';

@inject(RoomsService)
export class RoomsList {

  rooms = [];

  constructor(roomsService) {
    this.roomsService = roomsService;
  }

  created() {
    this.roomsService.getRooms().then((rooms) => {
      console.log(rooms);
      this.rooms = rooms;
    });
  }
}
