import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FirstComponentComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent]
})
export class AppComponent {
  userName = 'Joaquim';

  user = {
    nome: "William",
    idade: 22,
    universidade: "UTFPR",
    curso: "Bacharel em Engenharia de Software",
    periodo: "8º"
  }

  title = 'curso-angular';
}
