import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlartsPageRoutingModule } from './alarts-routing.module';

import { AlartsPage } from './alarts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlartsPageRoutingModule
  ],
  declarations: [AlartsPage]
})
export class AlartsPageModule {}
