import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAdultoPageRoutingModule } from './form-adulto-routing.module';

import { FormAdultoPage } from './form-adulto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormAdultoPageRoutingModule
  ],
  declarations: [FormAdultoPage]
})
export class FormAdultoPageModule {}
