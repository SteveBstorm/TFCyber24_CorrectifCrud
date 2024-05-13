import { Injectable } from '@angular/core';
import { Fan } from '../models/fan.model';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  fanList : Fan[] = [
    {name : 'Arthur', birthdate : new Date(2000,5,10), favoriteShows : ["Stargate", "Friends", "Charmed"]}
  ]

  constructor() { }

  getAll() : Fan[] {
    return this.fanList
  }

  getById(index : number) : Fan {
    return this.fanList[index]
  }

  create(newFan : Fan) : void {
    this.fanList.push(newFan)
  }

  update(index : number, fan : Fan) {
    this.fanList[index] = fan
  }

  delete(index : number) {
    this.fanList.splice(index, 1)
  }
}
