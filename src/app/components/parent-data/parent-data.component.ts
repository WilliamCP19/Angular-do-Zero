import { Component, Input } from '@angular/core';
import internal from 'node:stream';

@Component({
  selector: 'app-parent-data',
  standalone: true,
  imports: [],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent {
  @Input() name: string = '';
  @Input() usuario!: {nome: string, idade: number, universidade: string, curso: string, periodo: string};
}
