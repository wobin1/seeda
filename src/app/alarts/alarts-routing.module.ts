import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlartsPage } from './alarts.page';

const routes: Routes = [
  {
    path: '',
    component: AlartsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlartsPageRoutingModule {}
