import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrrenthandPageRoutingModule } from './currrenthand-routing.module';

import { CurrrenthandPage } from './currrenthand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrrenthandPageRoutingModule
  ],
  declarations: [CurrrenthandPage]
})
export class CurrrenthandPageModule {}
