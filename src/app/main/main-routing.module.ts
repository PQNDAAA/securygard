import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path:'login1',
        loadChildren: () =>import('../login1/login1.module').then(m => m.Login1PageModule)
      },
      {
        path:'login2',
        loadChildren: () =>import('../login2/login2.module').then(m => m.Login2PageModule)
      },
      {
        path:'',
        redirectTo:'login1',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
