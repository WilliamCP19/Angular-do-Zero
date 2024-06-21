import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})

export class ListRenderComponent {
  animals: Animal[] = [
    { name: "Turca", type: "Dog", age: 10 },
    { name: "Tom", type: "Cat", age: 4 },
    { name: "Frida", type: "Dog", age: 1 },
    { name: "Bob", type: "Horse", age: 7 }
  ]

  animalDetails = "";

  showAge (animal: Animal ) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age}`;
    this.animalDetails += + animal.age == 1 ? " ano": " anos";
  }
}
