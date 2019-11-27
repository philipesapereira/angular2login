import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  add(key: string, value: string) {
    window.localStorage.setItem(key, value);
    return this;
   }

  get(key: string) {
    return window.localStorage.getItem(key) || '';
   }

  addObj(key: string, value: {} = {}) {

    window.localStorage.setItem(key, JSON.stringify(value));
    return this;
   }

  getObj(key: string) {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : {};
   }

   remove(key: string) {
    window.localStorage.removeItem(key);
    return this;
   }

}
