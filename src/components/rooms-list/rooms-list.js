import { inject } from 'aurelia-framework';
import { LogManager } from 'aurelia-framework';
import _ from 'lodash';

import { RoomsService } from '../../services/roomsService';

const logger = LogManager.getLogger('RoomsList');

@inject(RoomsService)
export class RoomsList {

  rooms = [];

  constructor(roomsService) {
    this.roomsService = roomsService;
  }

  created() {
    this.roomsService.getRooms().then((rooms) => {
      this.rooms = _.map(rooms, 'name');
    }).catch((error) => {
      logger.error(error.message);
    });
  }
}
