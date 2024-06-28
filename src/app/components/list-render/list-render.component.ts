import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})

export class ListRenderComponent {

  constructor (private listService: ListService) {this.getAnimals(  )}

  animals: Animal[] = [];

  animalDetails = "";

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  showAge (animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age}`;
    this.animalDetails += + animal.age == 1 ? " ano": " anos";
  }

  removeAnimal (animal: Animal) {
    console.log ("Removendo Animal...");
    this.animals = this.listService.remove(this.animals, animal);
  }
}