import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuzzlightyearPageRoutingModule } from './buzzlightyear-routing.module';

import { BuzzlightyearPage } from './buzzlightyear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuzzlightyearPageRoutingModule
  ],
  declarations: [BuzzlightyearPage]
})
export class BuzzlightyearPageModule {}
