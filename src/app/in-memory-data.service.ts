import { Injectable } from '@angular/core';
import { Hero} from './hero';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr. Strange'},
      { id: 12, name: 'Iron Man'},
      { id: 13, name: 'Hulk'},
      { id: 14, name: 'Iron Man'},
      { id: 15, name: 'Ant Man'},
      { id: 16, name: 'Superman'},
      { id: 17, name: 'Batman'},
      { id: 18, name: 'Flash'},
      { id: 19, name: 'Wonder Woman'},
      { id: 20, name: 'Aqua man'},
      { id: 21, name: 'Captain America'},
      { id: 22, name: 'Thor'},
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
