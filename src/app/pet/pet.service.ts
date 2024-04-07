import { Injectable } from '@angular/core';
import { Pet } from '../generices/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetService implements Pet {

  constructor() { }

  name: string = "Fluffy";
  hunger: number = 50;
  happiness: number = 50;

  feed() {
    this.hunger -= 10;
    this.happiness += 5;
    this.update();
  }

  play() {
    this.hunger += 5;
    this.happiness += 10;
    this.update();
  }

  update() {
    if (this.hunger < 0) this.hunger = 0;
    if (this.hunger > 100) this.hunger = 100;
    if (this.happiness < 0) this.happiness = 0;
    if (this.happiness > 100) this.happiness = 100;
  }
}
