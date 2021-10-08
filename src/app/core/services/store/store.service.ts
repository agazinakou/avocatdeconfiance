import { Avocat } from './../../models/avocat';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  item: any;
  avocats: Avocat[] = [];

  constructor() { }

  getItem(){ return this.item; };
  setItem(item: any){ this.item = item; };

  getAvocats(){ return this.avocats; };
  setAvocats(item: any){ this.avocats = item; console.log(item); };
}
