import { Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { EmitterComponent } from './components/emitter/emitter.component';

export const routes: Routes = [
    { path: '', component: FirstComponentComponent },
    { path: 'list', component:  ListRenderComponent },
    { path: "change-number", component: EmitterComponent }
];