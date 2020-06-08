import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FilterPage } from "./filter.page";

const routes: Routes = [
  {
    path: "",
    component: FilterPage,
  },
  {
    path: ":docterId",
    loadChildren: () =>
      import("../dokter/dokter.module").then((m) => m.DokterPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterPageRoutingModule {}
