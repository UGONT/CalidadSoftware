import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojaMedicaPageRoutingModule } from './hoja-medica-routing.module';

import { HojaMedicaPage } from './hoja-medica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojaMedicaPageRoutingModule
  ],
  declarations: [HojaMedicaPage]
})
export class HojaMedicaPageModule {}
