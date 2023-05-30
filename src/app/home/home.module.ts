import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MasPopularesComponent } from '../components/mas-populares/mas-populares.component';
import { MasDescargadosComponent } from '../components/mas-descargados/mas-descargados.component';
import { AgregarJuegoComponent } from '../components/agregar-videojuego/agregar-videojuego.component';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    MasPopularesComponent,
    MasDescargadosComponent,
    AgregarJuegoComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }

