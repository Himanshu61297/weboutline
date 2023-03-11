import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevcieMorePage } from './devcie-more.page';

const routes: Routes = [
  {
    path: '',
    component: DevcieMorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevcieMorePageRoutingModule {}
