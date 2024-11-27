import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./Access/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./Access/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'form-adulto',
    loadChildren: () => import('./Access/form-adulto/form-adulto.module').then( m => m.FormAdultoPageModule)
  },  {
    path: 'alarmas',
    loadChildren: () => import('./Access/alarmas/alarmas.module').then( m => m.AlarmasPageModule)
  },
  {
    path: 'telefono',
    loadChildren: () => import('./Access/telefono/telefono.module').then( m => m.TelefonoPageModule)
  },
  {
    path: 'hoja-medica',
    loadChildren: () => import('./Access/hoja-medica/hoja-medica.module').then( m => m.HojaMedicaPageModule)
  },


 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
