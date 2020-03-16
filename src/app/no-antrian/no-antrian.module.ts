import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoAntrianPageRoutingModule } from './no-antrian-routing.module';

import { NoAntrianPage } from './no-antrian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoAntrianPageRoutingModule
  ],
  declarations: [NoAntrianPage]
})
export class NoAntrianPageModule {}
