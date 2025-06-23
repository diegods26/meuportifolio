import { Routes } from '@angular/router';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portifolio/projetos', component: ProjetosComponent }
];
