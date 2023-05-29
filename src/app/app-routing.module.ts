import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';


const routes: Routes = [
  { path: 'module-auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  {path: 'module-home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
