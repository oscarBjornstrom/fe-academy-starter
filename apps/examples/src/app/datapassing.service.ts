import { Injectable } from '@angular/core';

@Injectable()
export class DatapassingService {

   items = [];

  constructor() { }

  getItems() {
    return [...this.items];
  }

  addItemToArray(itemToAdd: string) {
   this.items.push(itemToAdd);
  }
}
