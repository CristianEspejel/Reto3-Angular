import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MasPopularesComponent } from '../components/mas-populares/mas-populares.component';
import { MasDescargadosComponent } from '../components/mas-descargados/mas-descargados.component';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    MasPopularesComponent,
    MasDescargadosComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

