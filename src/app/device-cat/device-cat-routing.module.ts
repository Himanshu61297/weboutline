import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceCatPage } from './device-cat.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceCatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceCatPageRoutingModule {}
