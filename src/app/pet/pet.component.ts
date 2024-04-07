import { Component } from '@angular/core';
import { PetService } from './pet.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent {
  pet: PetService;
  constructor(petService: PetService) {
    this.pet = petService;
  }
  feed() {
    this.pet.feed();
  }

  play() {
    this.pet.play();
  }

  ngOnInit() {
    this.pet.update();
  }
}




