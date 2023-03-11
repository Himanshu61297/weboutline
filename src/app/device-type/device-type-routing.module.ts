import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceTypePage } from './device-type.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceTypePageRoutingModule {}
