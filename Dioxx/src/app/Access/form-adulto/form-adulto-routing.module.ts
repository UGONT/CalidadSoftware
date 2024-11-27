import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormAdultoPage } from './form-adulto.page';

const routes: Routes = [
  {
    path: '',
    component: FormAdultoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormAdultoPageRoutingModule {}
