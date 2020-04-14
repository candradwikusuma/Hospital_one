import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DokterPageRoutingModule } from './dokter-routing.module';

import { DokterPage } from './dokter.page';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DokterPageRoutingModule,
    NgSelectModule
  ],
  declarations: [DokterPage]
})
export class DokterPageModule { }
