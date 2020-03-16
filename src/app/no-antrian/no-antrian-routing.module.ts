import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoAntrianPage } from './no-antrian.page';

const routes: Routes = [
  {
    path: '',
    component: NoAntrianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoAntrianPageRoutingModule {}
