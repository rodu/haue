import { HueService } from 'HueService';

export class RoomsService {
  getRooms() {
    return new Promise((resolve, reject) => {
      jsHue.getGroups(resolve, reject);
    });
  }
}
