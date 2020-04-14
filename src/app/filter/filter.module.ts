import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterPageRoutingModule } from './filter-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPage } from './filter.page';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterPageRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [FilterPage]
})
export class FilterPageModule { }
