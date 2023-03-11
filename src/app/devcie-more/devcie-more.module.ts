import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevcieMorePageRoutingModule } from './devcie-more-routing.module';

import { DevcieMorePage } from './devcie-more.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevcieMorePageRoutingModule
  ],
  declarations: [DevcieMorePage]
})
export class DevcieMorePageModule {}
