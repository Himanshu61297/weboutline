import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceTypePageRoutingModule } from './device-type-routing.module';

import { DeviceTypePage } from './device-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceTypePageRoutingModule
  ],
  declarations: [DeviceTypePage]
})
export class DeviceTypePageModule {}
