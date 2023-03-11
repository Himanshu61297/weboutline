import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceCatPageRoutingModule } from './device-cat-routing.module';

import { DeviceCatPage } from './device-cat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceCatPageRoutingModule
  ],
  declarations: [DeviceCatPage]
})
export class DeviceCatPageModule {}
