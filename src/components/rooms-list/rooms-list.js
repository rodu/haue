import { RoomsService } from '../../services/roomsService';

export class RoomsList {

  rooms = [];

  static inject() { return [RoomsService]; }
  constructor(roomsService) {
    this.rooms = roomsService.getRooms();
  }
}
