import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MasPopularesComponent } from '../components/mas-populares/mas-populares.component';
import { MasDescargadosComponent } from '../components/mas-descargados/mas-descargados.component';
import { ProximamenteComponent } from '../components/proximamente/proximamente.component';
import { AgregarJuegoComponent } from '../components/agregar-videojuego/agregar-videojuego.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'mas-populares', component: MasPopularesComponent },
      { path: 'mas-descargados', component: MasDescargadosComponent },
      { path: 'proximamente', component: ProximamenteComponent },
      { path: 'agregar-videojuego', component: AgregarJuegoComponent },
      { path: '', redirectTo: 'mas-populares', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
