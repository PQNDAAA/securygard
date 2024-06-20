import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrrenthandPage } from './currrenthand.page';

const routes: Routes = [
  {
    path: '',
    component: CurrrenthandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrrenthandPageRoutingModule {}
