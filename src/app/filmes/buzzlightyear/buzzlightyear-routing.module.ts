import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuzzlightyearPage } from './buzzlightyear.page';

const routes: Routes = [
  {
    path: '',
    component: BuzzlightyearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuzzlightyearPageRoutingModule {}
