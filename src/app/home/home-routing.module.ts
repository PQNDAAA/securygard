import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path:'userprofile',
        loadChildren: () => import('../userprofile/userprofile.module').then(m => m.UserprofilePageModule)
      },
      {
        path:'currenthand',
        loadChildren: () => import('../currrenthand/currrenthand.module').then(m=> m.CurrrenthandPageModule)
      },
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
