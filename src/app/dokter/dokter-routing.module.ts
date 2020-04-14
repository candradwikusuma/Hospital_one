
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { MultiPickerModule } from 'ion-multi-MultiPickerModule';
import { DokterPage } from './dokter.page';

const routes: Routes = [
  {
    path: '',
    component: DokterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DokterPageRoutingModule { }
