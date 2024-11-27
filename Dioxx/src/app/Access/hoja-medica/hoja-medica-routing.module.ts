import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojaMedicaPage } from './hoja-medica.page';

const routes: Routes = [
  {
    path: '',
    component: HojaMedicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojaMedicaPageRoutingModule {}
