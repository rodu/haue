export default class StorageService {
  setItem(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key) {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }
}
