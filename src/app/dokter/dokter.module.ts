import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DokterPageRoutingModule } from './dokter-routing.module';

import { DokterPage } from './dokter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DokterPageRoutingModule
  ],
  declarations: [DokterPage]
})
export class DokterPageModule {}
